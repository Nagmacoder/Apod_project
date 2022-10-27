const dbConfig = require("./app/config/db.config.js");
const message = require("./app/constant/response.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(cors(corsOptions));

app.use(bodyParser.json());

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: message.Success.WELCOME });
});

require("./app/routes/apod.routes")(app);

const PORT = dbConfig.PORT || 8080;
app.listen(PORT, () => {
  console.log(`${message.Success.SERVICE_STATUS} ${PORT}.`);
});
