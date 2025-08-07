const sequelize = require("sequelize");

const model = {
  id: {
    type: sequelize.STRING,
    primaryKey: true,
  },
  property_type: {
    type: sequelize.STRING,
    allowNull: false,
  },
  tag: {
    type: sequelize.STRING,
  },
  price: {
    type: sequelize.INTEGER,
  },
  duration: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  duration_type: {
    type: sequelize.ENUM(["day", "nights"]),
    defaultValue: "nights",
    allowNull: false,
  },
  rating: {
    type: sequelize.FLOAT,
  },

  address: {
    type: sequelize.STRING,
  },
  buttonType: {
    type: sequelize.ENUM(["like", "share"]),
    defaultValue: "like",
  },
  is_liked: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
  location: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

module.exports = {
  model,
};
