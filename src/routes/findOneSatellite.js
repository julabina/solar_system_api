const { Satellite } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/satellites/:id', (req, res) => {
        Satellite.findByPk(req.params.id)
        .then(sat => {
            if (sat !== null) {
                const message = `Un satellite a bien été trouvée.`;
                res.json({message, data: sat})
            } else {
                const message = 'Aucun satellite ne correspond à l\'id.';
                res.status(404).json({message})
            }
        })
        .catch(error => {
            const message = 'La liste des satellites n\'a pas pu etre récupérée, essayer ultérieurement.';
            res.status(500).json({message, data: error});
        })
    })
}