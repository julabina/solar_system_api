const { Satellite } = require('../db/sequelize');

module.exports = (app) => {
    app.delete('/api/satellites/:id', (req, res) => {
        return Satellite.findByPk(req.params.id).then(sat => {
            if (sat === null) {
                const message = 'Le satellite demandé n\'existe pas.';
                return res.status(404).json({message})
            }
            const satelliteDeleted = sat;
            Satellite.destroy({
                where: {id: sat.id}
            })
            .then(() => {
                const message = `Le satellite ${satelliteDeleted.id} a bien été supprimé.`;
                res.json({message, data: satelliteDeleted})
            })
        })
        .then()
    })
}