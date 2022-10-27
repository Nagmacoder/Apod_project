const dotenv = require("dotenv");
dotenv.config();

const ENV = process.env;
const config = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Nagma@123$",
  DB: "APOD",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  URL: ENV.URL,
  PORT: ENV.PORT,
  IMAGEPATH: ENV.IMAGEPATH,
  LOCALIMAGE: ENV.LOCALIMAGE,
};

module.exports = config;
