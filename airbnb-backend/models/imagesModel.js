const sequelize = require("sequelize");

const model = {
  id: {
    type: sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  imageUrl: {
    type: sequelize.STRING,
    allowNull: false,
  },
  property_id: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

module.exports = {
  model,
};
