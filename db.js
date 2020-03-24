const mongoose = require("mongoose");
const env = require("./env").getEnv();
const debug = require("debug")(env.db_debug);
const dbURL = `mongodb://${env.dbConnection.host}:${env.dbConnection.port}/${env.dbConnection.name}`;
let dbConnection = mongoose
  .createConnection(dbURL, {
    useNewUrlParser: env.dbMongosseConfig.NEW_URL_PARSER,
    useUnifiedTopology: env.dbMongosseConfig.UNIFIED_TOPOLOGY,
    useCreateIndex: env.dbMongosseConfig.CREATE_INDEX,
    bufferCommands: env.dbMongooseConfig.BUFFER_COMMANDS,
    autoIndex: env.dbMongooseConfig.AUTO_INDEX,
    autoCreate: env.dbMongooseConfig.AUTO_CREATE,
    keepAlive: env.dbMongooseConfig.KEEP_ALIVE
  })
  .on("error", () => debug("Db connection error"));

module.exports = dbConnection;
