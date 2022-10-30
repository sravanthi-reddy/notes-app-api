/**
 * Contains configuration related methods
 * Author : Sravanthi Nuthula
 */

const Sequelize = require("sequelize");

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
    });

 module.exports = sequelize