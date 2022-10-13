const db = require("../config/connection");

const { Gifter, Recipient, Gift, Message } = require("../models");

const gifterSeeds = require("./gifterSeeds.json");
const recipientSeeds = require("./recipientSeeds.json");
const giftSeeds = require("./giftSeeds.json");
const messageSeeds = require("./messageSeeds.json");

db.once("open", async () => {
  try {
    await Gifter.deleteMany({});
    await Recipient.deleteMany({});
    await Gift.deleteMany({});
    await Message.deleteMany({});

    await Gifter.create(gifterSeeds);
    await Recipient.create(recipientSeeds);
    await Gift.create(giftSeeds);
    for (let i = 0; i < messageSeeds.length; i++) {
      const { _id, messageAuthor } = await Message.create(messageSeeds[i]);
      const gifter = await Gifter.findOneAndUpdate(
        { name: messageAuthor },
        {
          $addToSet: {
            message: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Data seeded! 🌱");
  process.exit(0);
});
