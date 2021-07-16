const { GraphQLObjectType } = require("graphql");
const { getAllBooks } = require("../query");

module.exports = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    getAllBooks
  })
});
