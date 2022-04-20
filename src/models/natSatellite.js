module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Moon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        periapsis: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        apoapsis: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        diameter: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        orbital_duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        orbitOn: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}