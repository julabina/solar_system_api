const { Planet } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/planets', (req, res) => {
        Planet.findAll()
        .then(planets => {
            const message = 'La liste des planetes a bien été récupérée.';
            res.json({message, data: planets})
        })
    })
}