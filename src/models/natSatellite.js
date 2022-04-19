module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Moon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orbital_duration: {
            type: DataTypes.INTEGER,
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