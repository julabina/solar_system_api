const { Satellite } = require('../db/sequelize');

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
    })
}