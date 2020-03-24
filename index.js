const app = require("./server");
const env = require("./env").getEnv();
const db = require("./db");
const debug = require("debug")(env.server_debug);

db.on("connect", () => {
  app.listen(env.port, () => debug(`listening to port ${env.port}`));
});
