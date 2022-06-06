const { Sequelize } = require("sequelize");

// Your SQL DB config
const dbConfig = {
  HOST: "localhost",
  USER: "sa",
  PASSWORD: "YourStrong@Passw0rd",
  DB: "test",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// New instance of Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = require("./Models/Users.model")(sequelize, Sequelize);

module.exports = db;
