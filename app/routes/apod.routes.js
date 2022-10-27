module.exports = (app) => {
  const apods = require("../controllers/apod.controller.js");

  var router = require("express").Router();

  // Get apod with date
  router.get("/", apods.find);

  app.use("/api/apods", router);
};
