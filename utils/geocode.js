const axios = require("axios");

const geocodeCache = new Map();

async function geocodeAddress(location, country) {
    const fallbackGeometry = {
        type: "Point",
        coordinates: [0, 0]
    };

    const normalizedKey = `${String(location || "").toLowerCase()}|${String(country || "").toLowerCase()}`;

    if (geocodeCache.has(normalizedKey)) {
        return geocodeCache.get(normalizedKey);
    }

    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await axios.get("https://nominatim.openstreetmap.org/search", {
                params: {
                    q: `${location}, ${country}`,
                    format: "json",
                    limit: 1
                },
                headers: {
                    "User-Agent": "Wanderlust-App/1.0",
                    "Accept-Language": "en"
                },
                timeout: 10000
            });

            if (res.data.length === 0) {
                geocodeCache.set(normalizedKey, fallbackGeometry);
                return fallbackGeometry;
            }

            const { lon, lat } = res.data[0];
            const geometry = {
                type: "Point",
                coordinates: [parseFloat(lon), parseFloat(lat)]
            };

            geocodeCache.set(normalizedKey, geometry);
            return geometry;
        } catch (err) {
            const isRateLimited = err.response?.status === 429 || err.response?.status >= 500;

            if (!isRateLimited || attempt === 3) {
                geocodeCache.set(normalizedKey, fallbackGeometry);
                return fallbackGeometry;
            }

            const delay = attempt * 2000;
            console.warn(`Geocoding retry ${attempt}/3 for ${location}, ${country} in ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    geocodeCache.set(normalizedKey, fallbackGeometry);
    return fallbackGeometry;
}

module.exports = geocodeAddress;