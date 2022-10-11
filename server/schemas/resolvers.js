const { AuthenticationError } = require("apollo-server-express");
const { Gifter, Receiver, Gift } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    receiver: async (parent, { receiverId }) => {
      return Receiver.findOne({ _id: receiverId });
    },
  },

  Mutation: {
    addGift: async (parent, args) => {
      return Gift.create({ args });
    },
    removeGift: async (parent, { giftId }) => {
      return Gift.findOneAndDelete({ _id: giftId });
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
