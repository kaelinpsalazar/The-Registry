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
  message: {
    type: String,
    minLength: 12,
  },
});

// set up pre-save middleware to create password
gifterSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
gifterSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Gifter = model("Gifter", gifterSchema);

module.exports = Gifter;
