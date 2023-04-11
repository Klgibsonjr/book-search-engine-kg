const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id }).select(
          '-password'
        );

        return foundUser;
      }
      throw new AuthenticationError('User not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {},
    login: async (parent, { email, password }) => {},
    saveBook: async (parent, { bookData }, context) => {},
  },
};
