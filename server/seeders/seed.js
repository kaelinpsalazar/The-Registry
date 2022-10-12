const db = require("../config/connection");

const { Gifter, Recipient, Gift } = require("../models");

const gifterSeeds = require("./gifterSeeds.json");
const recipientSeeds = require("./recipientSeeds.json");
const giftSeeds = require("./giftSeeds.json");

db.once("open", async () => {
  try {
    await Gifter.deleteMany({});
    await Recipient.deleteMany({});
    await Gift.deleteMany({});

    await Gifter.create(gifterSeeds);
    await Recipient.create(recipientSeeds);
    await Gift.create(giftSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Data seeded! 🌱");
  process.exit(0);
});
