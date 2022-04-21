const { Moon } = require('../db/sequelize');
const { Op } = require('sequelize');
const planetOrbitOn = ['mars', 'terre', 'jupiter', 'saturne', 'uranus', 'neptune'];

module.exports = (app) => {
    app.get('/api/moons', (req, res) => {

        if(req.query.search) {
            const search = req.query.search;

            if(search.length < 2) {
                const message = 'La recherche doit contenir au moins 2 caractères.';
                return res.status(400).json({message}); 
            }

            if(req.query.orbitOn) {
                const orbitOnFiltered = planetOrbitOn.filter(el => {
                    if(el === req.query.orbitOn) {
                         return Moon.findAndCountAll({where: {
                             name: {
                                [Op.like]: `%${search}%`
                             },
                             orbitOn : el
                         }})
                         .then(({count, rows}) => {
                             const message = `Il y a ${count} lunes qui correspondent à la recherche.`;
                             res.json({message, data: rows}) 
                         })
                    } 
                 })
             
                 if (orbitOnFiltered.length < 1) {
                     const message = 'OrbitOn ne peut contenir que mars, terre, jupiter, saturne, uranus ou neptune.';
                     res.status(400).json({message});
                 }
     
             } else {
                 return Moon.findAndCountAll({where: {
                     name: {
                         [Op.like]: `%${search}%`
                     }
                 }})
                 .then(({count, rows}) => {
                    const message = `Il y a ${count} lunes qui correspondent à la recherche.`;
                    res.json({message, data: rows}) 
                 })
             }

            
        } else {

            if(req.query.orbitOn) {
                const orbitOnFiltered = planetOrbitOn.filter(el => {
                    if(el === req.query.orbitOn) {
                        return Moon.findAndCountAll({where: {
                            orbitOn : el
                        }})
                        .then(({count, rows}) => {
                            const message = `Il y a ${count} lunes qui correspondent à la recherche.`;
                            res.json({message, data: rows}) 
                        })
                    } 
                })
            
                if (orbitOnFiltered.length < 1) {
                    const message = 'OrbitOn ne peut contenir que mars, terre, jupiter, saturne, uranus ou neptune.';
                    res.status(400).json({message});
                }

            } else {

                Moon.findAll()
                .then(moons => {
                    const message = 'La liste des lunes a bien été récupérée.';
                    res.json({message, data: moons})
                }) 

            }
        }
    })
}