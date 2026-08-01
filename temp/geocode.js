const axios = require("axios");

async function geocodeAddress(location, country) {
    const res = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            q: `${location}, ${country}`,
            format: "json",
            limit: 1
        },
        headers: {
            "User-Agent": "Wanderlust-App"
        }
    });

    if (res.data.length === 0) {
        throw new Error("Location not found");
    }

    const { lon, lat } = res.data[0];
    return {
        type: "Point",
        coordinates: [parseFloat(lon), parseFloat(lat)]
    };
}

module.exports = geocodeAddress;