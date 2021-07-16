const { GraphQLList, GraphQLNonNull, GraphQLString } = require("graphql");

const BookType = require("../../../modules/book/BookType");
const BookModel = require("../../../modules/book/BookModel");

module.exports = {
  type: new GraphQLList(BookType),
  args: { search: { type: GraphQLString } },
  resolve: async (_, { search }, context) => {
    if (search) {
      return await BookModel.find({ title: { $regex: search } })
    }
    return await BookModel.find({});
  }
};
