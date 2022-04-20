const { Planet } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/planets/:id', (req, res) => {
        Planet.findByPk(req.params.id)
        .then(planet => {   
            if (planet !== null) {
                const message = 'Une planete a bien été trouvée.'
                res.json({message, data: planet})
            } else {
                const message = 'Aucune planete ne correspond à l\'id.'
                return  res.status(404).json({message})
            } 
        })
        .catch(error => {
            const message = 'La liste des planetes n\'a pas pu etre récupérée, essayer ultérieurement'
            res.status(500).json({message, data: error})
        })
    })
}