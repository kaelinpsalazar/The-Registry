const { Schema, model } = require("mongoose");

const registrySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  gifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gift",
    },
  ],
});

const Registry = model("Registry", registrySchema);

module.exports = Registry;
