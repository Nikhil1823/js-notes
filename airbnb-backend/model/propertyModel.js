const Sequalise = require("sequelize");

const model = {
  id: {
    type: Sequalise.STRING,
    allowNull: false,
    primaryKey: true,
  },
  property_type: {
    type: Sequalise.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  tag: {
    type: Sequalise.STRING,
  },
  price: {
    type: Sequalise.INTEGER,
  },
  duration: {
    type: Sequalise.INTEGER,
    allowNull: false,
  },
  duration_type: {
    type: Sequalise.ENUM(["day", "night"]),
    defaultValue: "night",
    allowNull: false,
  },
  rating: {
    type: Sequalise.FLOAT,
  },

  address: {
    type: Sequalise.STRING,
  },
  buttonType: {
    type: Sequalise.ENUM(["like", "share"]),
    defaultValue: "like",
  },
  is_liked: {
    type: Sequalise.BOOLEAN,
    defaultValue: false,
  },
  location: {
    type: Sequalise.STRING,
    allowNull: false,
  },
};

module.exports = {
  model,
};
