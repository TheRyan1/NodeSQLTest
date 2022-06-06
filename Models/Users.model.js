const db = require("../db");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
        "User",
        {
          id: {
            type: Sequelize.INTEGER,
            // Auto increment IDs
            autoIncrement: true,
            // Make primary Keys
            primaryKey: true,
          },
          // Model attributes are defined here
          firstName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lastName: {
            type: Sequelize.STRING,
            // allowNull defaults to true
          },
        },
        {
            // Sequelize makes 2 columns for time stamps. This disables it
          timestamps: false,
        }
      );
      return Users;
    
    }


