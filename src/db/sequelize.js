const { Sequelize, DataTypes } = require('sequelize');
const PlanetModel = require('../models/planet');
const MoonModel = require('../models/natSatellite');
const SatelliteModel = require('../models/satellite');


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

const Planet = PlanetModel(sequelize, DataTypes);
const Moon = MoonModel(sequelize, DataTypes);
const satellite = SatelliteModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({force: true}).then(() => {
        console.log('La base de donnée a bien été initialisée');
    })
}

module.exports = {
    initDb ,Planet, Moon, satellite
}