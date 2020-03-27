const mongoose = require("mongoose");
const env = require("./env").getEnv();
const debug = require("debug")(env.db_debug);
const dbURL = `mongodb://${env.dbConnection.host}:${env.dbConnection.port}/${env.dbConnection.name}`;
const dbConnectionConfig = env.dbMongooseConfig;
mongoose.plugin(require("./plugins/updatedAt"));
let dbConnection = mongoose
  .createConnection(dbURL, {
    useNewUrlParser: dbConnectionConfig.NEW_URL_PARSER,
    useUnifiedTopology: dbConnectionConfig.UNIFIED_TOPOLOGY,
    useCreateIndex: dbConnectionConfig.CREATE_INDEX,
    bufferCommands: dbConnectionConfig.BUFFER_COMMANDS,
    autoIndex: dbConnectionConfig.AUTO_INDEX,
    autoCreate: dbConnectionConfig.AUTO_CREATE,
    keepAlive: dbConnectionConfig.KEEP_ALIVE
  })
  .on("error", () => debug("Db connection error"))
  .on("connected", () => debug("Db connected"));

module.exports = dbConnection;
