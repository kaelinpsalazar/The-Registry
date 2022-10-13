const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const recipientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  registry: {
    type: Schema.Types.ObjectId,
    ref: "Registry",
  },
});

// set up pre-save middleware to create password
recipientSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
recipientSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Recipient = model("Recipient", recipientSchema);

module.exports = Recipient;
