const db = require("../models");
const APOD_Record = db.APOD_Record;

class apodServices {
  async getapod(date) {
    const apodDATA = await APOD_Record.findOne({ where: { date: date } })
      .then((data) => {
        if (data) {
          return data;
        }
      })
      .catch((err) => {
        return err;
      });
    return apodDATA;
  }

  async saveApod(result) {
    const apodDATA = await APOD_Record.create(result)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    return apodDATA;
  }
}

module.exports = apodServices;
