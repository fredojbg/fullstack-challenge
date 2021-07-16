const { GraphQLList } = require("graphql");

const BookType = require("../../../modules/book/BookType");
const BookModel = require("../../../modules/book/BookModel");

module.exports = {
  type: new GraphQLList(BookType),
  resolve: async (_, __, context) => {
    return await BookModel.find({}).populate("user");
  }
};
