const { AuthenticationError } = require("apollo-server-express");
const { Gifter, Recipient, Gift, Registry, Message } = require("../models");
const { signToken } = require("../utils/auth");

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
    recipient: async (parent, { name }) => {
      return Recipient.findOne({ name }).populate("gifts");
    },
    gifters: async () => {
      return Gifter.find();
    },
    gifter: async (parent, { gifterId }) => {
      return Gifter.findOne({ _id: gifterId });
    },
    messages: async () => {
      return Message.find();
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },
  },
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const recipient = await Recipient.create({ name, email, password });
      const token = signToken(recipient);
      return { token, recipient };
    },
    login: async (parent, { email, password }) => {
      const recipient = await Recipient.findOne({ email });

      if (!recipient) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await recipient.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(recipient);

      return { token, recipient };
    },
    addGift: async (
      parent,
      { product, price, store, description, url, imageUrl, registryId },
      context
    ) => {
      // if (context.user) {
      console.log("==================");
      console.log(product);
      console.log("==================");
      const gift = await Gift.create({
        product,
        price,
        store,
        description,
        url,
        imageUrl,
      });

      await Registry.findOneAndUpdate(
        { _id: registryId },
        { $addToSet: { gifts: gift._id } }
      );

      return gift;
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    removeGift: async (parent, { recipienId }, context) => {
      // if (context.user) {
      const gift = await Gift.findOneAndDelete({
        _id: giftId,
      });

      await Registry.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { gifts: gift._id } }
      );

      return gift;
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    addMessage: async (parent, { messageAuthor, messageText }) => {
      console.log(messageAuthor, messageText);

      // add this message to the list of messages

      return Message.create(
        { messageAuthor: messageAuthor },
        {
          $addToSet: { messages: { messageText, messageAuthor } },
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
