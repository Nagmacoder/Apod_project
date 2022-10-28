const fs = require("fs"),
  request = require("request");
const dbConfig = require("../config/db.config");
const download = function (uri, filename, callback) {
  console.log(`${__dirname}${dbConfig.IMAGEPATH}${filename} uyuiy`);

  request.head(uri, function (err, res, body) {
    request(uri)
      .pipe(
        fs.createWriteStream(`${__dirname}${dbConfig.IMAGEPATH}${filename}`)
      )
      .on("close", callback);
  });
};

module.exports.download = download;
