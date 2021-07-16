require("dotenv").config();

const ENV = process.env;

const graphqlPort = ENV.PORT || 9000;


const dbUrl = `mongodb+srv://alfredoteste:alfredoteste@timelinecluster.d2aga.mongodb.net/demo`;

module.exports = { graphqlPort, dbUrl };
