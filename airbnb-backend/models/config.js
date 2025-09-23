require("dotenv").config();

module.exports = {
  
  dev: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    database: process.env.DB_NAME,
  },
};
