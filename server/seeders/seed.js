const db = require("../config/connection");

const { Gifter, Recipient, Gift, Message, Registry } = require("../models");

const gifterSeeds = require("./gifterSeeds.json");
const recipientSeeds = require("./recipientSeeds");
const giftSeeds = require("./giftSeeds");

db.once("open", async () => {
  try {
    await Gifter.deleteMany({});
    await Recipient.deleteMany({});
    await Gift.deleteMany({});

    await Gifter.create(gifterSeeds);
    await Gift.create(giftSeeds);
    await Recipient.create(recipientSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Data seeded! 🌱");
  process.exit(0);
});
