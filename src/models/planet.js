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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        diameter: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        day_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orbital_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        moons: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}