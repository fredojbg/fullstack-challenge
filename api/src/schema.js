const { GraphQLSchema } = require("graphql");
const QueryType = require("./graphql/type/QueryType");
const { Schema } = require("mongoose");

module.exports = new GraphQLSchema({
  query: QueryType,
});
