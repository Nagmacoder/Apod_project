const dotenv = require("dotenv");
const dbConfig = require("./db.config.js");
dotenv.config();

const nasaConfig = {
  method: "get",
  url: `${dbConfig.URL}`,
};

module.exports = nasaConfig;
