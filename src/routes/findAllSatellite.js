const { Satellite } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/satellites', (req, res) => {
        Satellite.findAll()
        .then(satellites => {
            const message = 'La liste des satellites a bien été récupérée.';
            res.json({message, data: satellites})
        })
    })
}