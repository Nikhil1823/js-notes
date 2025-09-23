"use strict";
const propertyModel = require("../models/propertyModel");

module.exports = {
  async up(queryInterface, Sequelize) {
 

    await queryInterface.createTable("property_model_new", propertyModel.model);
  },

  async down(queryInterface, Sequelize) {
 
    await queryInterface.dropTable("property_model_new");
  },
};
