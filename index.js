const app = require("./bootstrap");
const env = require("./env").getEnv();
const db = require("./db");
const debug = require("debug")(env.server_debug);

db.on("connected", () => {
  app.listen(env.port, () => debug(`listening to port ${env.port}`));
});
