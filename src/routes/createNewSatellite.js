const { Satellite } = require('../db/sequelize');

module.exports = (app) => {
    app.post('/api/satellites', (req, res) => {
        Satellite.create(req.body)
        .then(satellite => {
            const message = `Le satellite ${req.body.name} a bien été créé.`;
            res.json({message, data: satellite})
        })
    })
}