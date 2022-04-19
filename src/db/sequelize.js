const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
    'solarS',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        }, loggin: false
    }
)    