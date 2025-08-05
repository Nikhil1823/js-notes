const Sequalise = require("sequelize");

const model = {
  id: {
    type: Sequalise.STRING,
    allowNull: false,
    primaryKey: true,
  },
  imageUrl: {
    type: Sequalise.STRING,
    allowNull: false,
  },
  property_id: {
    type: Sequalise.STRING,
    allowNull: false,
  },
};

module.exports = {
  model,
};


