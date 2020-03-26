const express = require("express");
const app = express();
const routes = require("./routes");
const middlewares = require("./middlewares");
const env = require("./env");
require("./models");
require("./globals");

env.setAppEnv(app);
app.set("views", __dirname + "/public");
app.engine("html", require("pug").renderFile);
app.set("view engine", "pub");
app.use(middlewares);
app.use(routes);

module.exports = app;
