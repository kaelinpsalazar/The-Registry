const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const gifterSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must provide a valid email address!"],
  },
  message: [
    {
      type: Schema.Types.ObjectID,
      ref: "Message",
    },
  ],
});

const Gifter = model("Gifter", gifterSchema);

module.exports = Gifter;
