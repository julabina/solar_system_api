const validPlanets = ['mercure', 'venus', 'mars', 'terre', 'jupiter', 'saturne', 'uranus', 'neptune'];

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Satellite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom est deja pris.'
            },
            validate: {
                notEmpty: {msg : 'Le nom ne doit pas etre vide.'},
                notNull: {msg: 'Le nom est une propriétée requise.'},
                len : {args: [1, 50], msg: 'Le nom doit contenir entre 1 et 50 caractères.'}
            }
        },
        periapsis: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate : {
                isInt : {msg: 'Utilisez uniquement des nombres entiers pour le périgée.'},
                notNull: {msg: 'Le périgée est une propriétée requise.'},
                min: {args: [0], msg: 'Le périgée doit etre supérieur à 0.'},
                max: {args: [9999999], msg: 'Le périgée doit etre inférieur à 10 000 000.'}
            }
        },
        apoapsis: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt : {msg: 'Utilisez uniquement des nombres entiers pour l\'apogée.'},
                notNull: {msg: 'L\'apogée est une propriétée requise.'},
                min: {args: [0], msg: 'L\'apogée doit etre supérieur à 0.'},
                max: {args: [9999999], msg: 'L\'apogée doit etre inférieur à 10 000 000.'},
                isBiggerThanPeriapsis(value) {
                    if(value < this.periapsis) {
                        throw new Error('L\'apogée doit etre plus grand que le périgée.')
                    }
                }
            }
        },
        orbital_duration: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat : {msg: 'Utilisez TESTERSTESTESTESTESTEST'},
                notNull: {msg: 'Orbital_duration est une propriétée requise.'},
                min : {args: [0], msg: 'Orbital_duration doit etre supérieur à 0.'},
                max: {args: [9999], msg: 'Orbital_duration doit etre inférieur à 10 000.'}
            }
        },
        orbitOn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: 'orbitOn est une propriétée requise.'},
                notEmpty: {msg: 'orbitOn ne doit pas etre vide.'},
                len: {args: [1, 8], msg: 'orbitOn doit contenir entre 1 et 8 caractères.'},
                isLowercase: {msg: 'orbitOn doit etre ecrit en minuscule.'},
                isValidPlanet(value) {
                    if(!validPlanets.includes(value)) {
                        throw new Error(`orbitOn doit appartenir à la liste suivante : ${validPlanets}`)
                    }
                }
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}