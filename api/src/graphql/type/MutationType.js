const { GraphQLObjectType } = require("graphql");

const { CreateBook } = require("../mutation");

module.exports = new GraphQLObjectType({
  name: "Mutation",
  description: "The root of all mutations",
  fields: () => ({
    CreateBook,
  })
});
