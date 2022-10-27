const db = require("../models");
const dbConfig = require("../config/db.config.js");
const nasaConfig = require("../config/nasa.config");
const { download } = require("../helper/download.js");
const apodServices = require("../Services/apodServices.js");
const APOD_Record = db.APOD_Record;
const Op = db.Sequelize.Op;
const axios = require("axios");

const apod = new apodServices();

//  Find a Apod default for today
exports.find = async (req, res) => {
  try {
    const date = req.query.date;

    let getdate = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let fullDate = `${year}-${month}-${getdate}`;

    const response = await apod.getapod(date);

    if (response) {
      res.status(200).send(response);
    } else {
      //Fetch data from nasa api

      let config = {
        method: "get",
        url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
      };

      const data = await axios(config);
      const result = data?.data;

      if (!result) {
        res.status(400).send("Data Not Found.");
      }

      download(result.url, `${date}.png`, function () {
        console.log("done");
      });

      const imagedata = `${dbConfig.LOCALIMAGE}${date}`;
      result.url = imagedata;

      // Save Apod in the database

      const storedData = await apod.saveApod(result);

      if (storedData) {
        res.status(200).send(storedData);
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
