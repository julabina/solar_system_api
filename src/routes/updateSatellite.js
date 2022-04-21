const { Satellite } = require('../db/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = (app) => {
    app.put('/api/satellites/:id', (req, res) => {
        const id = req.params.id;
        Satellite.update(req.body,{
            where: {id: id}
        })
        .then(() => {
            return Satellite.findByPk(id).then(sat => {
                if (sat === null) {
                    const message = 'Le satellite démandé n\'existe pas.';
                    return res.status(404).json({message});
                }
                const message = `Le satellite ${sat.name} a bien été modifié.`;
                res.json({message, data: sat});
            })
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({message: error.message, data: error})
            } 
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({message: error.message, data: error})
            }
            const message = 'Le satellite n\'a pas pu etre modifié, essayer ultérieurement.';
            res.status(500).json({message, data: error});
        })
    })
}