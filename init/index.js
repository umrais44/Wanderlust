const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const listing = require("../models/listing")
const geocodeAddress = require("../utils/geocode.js") // adjust path if needed

const initData = require("./data")

if (!process.env.ATLASDB_URL) {
  console.error('ATLASDB_URL is missing. Check your .env file in the project root.');
  process.exit(1);
}

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLASDB_URL);
  console.log(`Connected to DB.`);
  await initDB();
}

async function initDB() {
  await listing.deleteMany({});

  for (let obj of initData.data) {
    try {
      const geometry = await geocodeAddress(obj.location, obj.country);

      await listing.create({
        ...obj,
        owner: "6a60ce786f57be9884540184",
        geometry: geometry
      });

      console.log(`✅ Added: ${obj.title}`);
    } catch (err) {
      console.log(`❌ Failed: ${obj.title} — ${err.message}`);
    }

    // Nominatim rate limit: max 1 request/second
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  console.log("Data is inserted.");
  mongoose.connection.close();
}