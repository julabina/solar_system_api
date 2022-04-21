const { Moon } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/moons/:id', (req, res) => {
        Moon.findByPk(req.params.id)
        .then(moon => {
            if (moon !== null) {
                const message = `Une lune a bien été trouvée.`;
                res.json({message, data: moon})
            } else {
                const message = 'Aucune lune ne correspond à l\'id.';
                res.status(404).json({message})
            }
        })
        .catch(error => {
            const message = 'La liste des lunes n\'a pas pu etre récupérée, essayer ultérieurement.';
            res.status(500).json({message, data: error});
        })
    })
}