const { Moon } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/moons', (req, res) => {
        Moon.findAll()
        .then(moons => {
            const message = 'La liste des lunes a bien été récupérée.';
            res.json({message, data: moons})
        })
    })
}