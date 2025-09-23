"use strict";
const propertyModel = require("../models/propertyModel");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
 

    await queryInterface.createTable("property_model_new", propertyModel.model);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("property_model_new");
  },
};
