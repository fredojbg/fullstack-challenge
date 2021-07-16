const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Book",
  description: "Book data",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  })
});
