const { GraphQLString, GraphQLNonNull } = require("graphql");

const BookType = require("../../../modules/book/BookType");
const BookModel = require("../../../modules/book/BookModel");

module.exports = {
  type: BookType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(_, { title, content }, context) {
    const book = new BookModel({
      title,
      content,
    });

    return book.save();
  }
};
