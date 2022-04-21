const { ValidationError, UniqueConstraintError } = require('sequelize');
const { Satellite } = require('../db/sequelize');

module.exports = (app) => {
    app.post('/api/satellites', (req, res) => {
        Satellite.create(req.body)
        .then(satellite => {
            const message = `Le satellite ${req.body.name} a bien été créé.`;
            res.json({message, data: satellite})
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({message: error.message, data: error})
            } 
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({message: error.message, data: error})
            }
            const message = 'Le satellite n\'a pas pu etre ajouté, essayer ultérieurement.';
            res.status(500).json({message, data: error});
        })
    })
}