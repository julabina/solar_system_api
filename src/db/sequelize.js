const { Sequelize, DataTypes } = require('sequelize');
const PlanetModel = require('../models/planet');
const MoonModel = require('../models/natSatellite');
const SatelliteModel = require('../models/satellite');
const data = require('./mock-solarSystem');


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
const Satellite = SatelliteModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({force: true}).then(() => {
        data.planets.map(el => {
            Planet.create({
                name: el.name,
                distance: el.distance,
                diameter: el.diameter,
                day_duration: el.day_duration,
                orbital_duration: el.orbital_duration,
                type: el.type,
                moons: el.moons
            })
        })
        data.moons.map(el => {
            Moon.create({
                name: el.name,
                periapsis: el.periapsis,
                apoapsis: el.apoapsis,
                diameter: el.diameter,
                orbital_duration: el.orbital_duration,
                orbitOn: el.orbitOn
            })
        })
        data.satellites.map(el => {
            Satellite.create({
                name: el.name,
                periapsis: el.periapsis,
                apoapsis: el.apoapsis,
                diameter: el.diameter,
                orbital_duration: el.orbital_duration,
                orbitOn: el.orbitOn
            })
        })


        console.log('La base de donnée a bien été initialisée');
    })
}

module.exports = {
    initDb ,Planet, Moon, Satellite
}