const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  messageAuthor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Message = model("Message", messageSchema);

module.exports = Message;
