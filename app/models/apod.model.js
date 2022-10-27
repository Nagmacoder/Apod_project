module.exports = (sequelize, Sequelize) => {
  const APOD_Record = sequelize.define("APOD_Record", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    explanation: {
      type: Sequelize.TEXT("long"),
    },
    url: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
  });

  return APOD_Record;
};
