require("dotenv").config();
const Sequelize = require("sequelize");
const propertyModel = require("./propertyModel");
const imageModel = require("./imagesModel");
const db = new Sequelize(require("./config").dev);
const propertyDbDef = db.define("propertyModel", propertyModel.model, {
  tableName: "propertyModel",
  timestamps: true,
});
const imagesDbDef = db.define("imagesModel", imageModel.model, {
  tableName: "imagesModel",
  timestamps: true,
});

db.authenticate();

module.exports = {
  propertyDbDef,
  imagesDbDef,
};
