module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Planet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distance: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        diameter: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        day_duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        orbital_duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        moons: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                return this.getDataValue('moons').split(',')
            },
            set(moons) {
                return this.setDataValue('moons', moons.join())
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}