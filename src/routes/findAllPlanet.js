const { Planet } = require('../db/sequelize');

module.exports = (app) => {
    app.get('/api/planets', (req, res) => {
        if (req.query.type) {
            const planetType = req.query.type;
            if (planetType === 'tellurique') {
                return Planet.findAndCountAll({where: {
                    type: "tellurique"
                }})
                .then(({count, rows}) => {
                    const message = `Il y a ${count} planetes qui correspondent à la recherche.`
                    res.json({message, data: rows})
                })
                .catch(error => {
                    const message = 'La liste des planetes n\'a pas pu etre récupérée, essayer ultérieurement';
                    res.status(500).json({message, data: error});
                })
                
            } else if (planetType === 'gazeuse') {
                return Planet.findAndCountAll({where: {
                    type: "gazeuse"
                }})
                .then(({count, rows}) => {
                    const message = `Il y a ${count} planetes qui correspondent à la recherche.`;
                    res.json({message, data: rows})
                })
                .catch(error => {
                    const message = 'La liste des planetes n\'a pas pu etre récupérée, essayer ultérieurement';
                    res.status(500).json({message, data: error});
                })
                
            } else {
                const message = 'Le type de planete doit etre tellurique ou gazeuse.';
                return res.status(400).json({message})
            }
        } 
        Planet.findAll()
        .then(planets => {
            const message = 'La liste des planetes a bien été récupérée.';
            res.json({message, data: planets})
        })
        .catch(error => {
            const message = 'La liste des planetes n\'a pas pu etre récupérée, essayer ultérieurement';
            res.status(500).json({message, data: error});
        })
    })
}