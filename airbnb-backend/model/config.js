const Sequalise = require("sequelize");
const propertyModel = require("./propertyModel");

const imageModel = require("./imagesModel");
const db = new Sequalise({
  username: "postgres",
  password: "12345",
  host: "127.0.0.1",
  port: "5432",
  dialect: "postgres",
  logging: false,
  database: "airbnb",
});
const propertyDbDef = db.define("propertyModel", propertyModel.model, {
  tableName: "propertyModel",
  timestamps: true,
});
const imagesDbDef = db.define("imagesModel", imageModel.model, {
  tableName: "imagesModel",
  timestamps: true,
});

db.authenticate();
db.sync({ alter: true });

module.exports = {
  propertyDbDef,
  imagesDbDef,
};
