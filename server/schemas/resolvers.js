// const { AuthenticationError } = require("apollo-server-express");
const { Gifter, Recipient, Gift } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    gifts: async () => {
      return Gift.find();
    },
    gift: async (parent, { giftId }) => {
      return Gift.findOne({ _id: giftId });
    },
    recipients: async () => {
      return Recipient.find().populate("gifts");
    },
    recipient: async (parent, { recipientId }) => {
      return Recipient.findOne({ _id: recipientId }).populate("gifts");
    },
    gifters: async () => {
      return Gifter.find();
    },
    gifter: async (parent, { gifterId }) => {
      return Gift.findOne({ _id: gifterId });
    },
  },

  Mutation: {
    addGift: async (parent, { recipientId, gift }) => {
      return Recipient.findOneAndUpdate(
        { _id: recipientId },
        {
          $addToSet: { gifts: gift },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeGift: async (parent, { recipientId, gift }) => {
      return Recipient.findOneAndUpdate(
        { _id: recipientId },
        { $pull: { gifts: gift } },
        { new: true }
      );
    },
    addMessage: async (parent, { gifterId, messageText }) => {
      return Gifter.findOneAndUpdate(
        { _id: gifterId },
        {
          $addToSet: { messages: { messageText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMessage: async (parent, { gifterId, messageId }) => {
      return Gifter.findOneAndUpdate(
        { _id: gifterId },
        { $pull: { comments: { _id: messageId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
