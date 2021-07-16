const Koa = require("koa");
const Router = require("koa-router");
const mongoose = require("mongoose");

const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");

const { graphqlPort, dbUrl } = require("./config/index");


const app = new Koa();
const router = new Router();

mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true
  },
  err => {
    if (err) {
      console.log("Some problem with the connection " + err);
    } else {
      console.log("The Mongoose connection is ready");
    }
  }
);



app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(500, () => {
  console.log("##########################################################");
  console.log("#####               STARTING SERVER                  #####");
  console.log("##########################################################\n");
  console.log(`App running and listening on port ${5000}...`);
  console.log(
    `GraphQL Server is now running on http://localhost:${5000}/graphql`
  );
});
