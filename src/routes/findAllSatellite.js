const { Satellite } = require('../db/sequelize');
const { Op } = require('sequelize');
const planetOrbitOn = ['mercure', 'venus', 'mars', 'terre', 'jupiter', 'saturne', 'uranus', 'neptune'];

module.exports = (app) => {
    app.get('/api/satellites', (req, res) => {
        
        if(req.query.search) {
            const search = req.query.search;

            if(search.length < 2) {
                const message = 'La recherche doit contenir au moins 2 caractères.';
                return res.status(400).json({message}); 
            }

            if(req.query.orbitOn) {
                const orbitOnFiltered = planetOrbitOn.filter(el => {
                    if(el === req.query.orbitOn) {
                         return Satellite.findAndCountAll({where: {
                             name: {
                                [Op.like]: `%${search}%`
                             },
                             orbitOn : el
                         }})
                         .then(({count, rows}) => {
                             const message = `Il y a ${count} satellites qui correspondent à la recherche.`;
                             res.json({message, data: rows}) 
                         })
                         .catch(error => {
                            const message = 'La liste des satellites n\'a pas pu etre récupérée, essayer ultérieurement';
                            res.status(500).json({message, data: error});
                        })
                    } 
                 })
             
                 if (orbitOnFiltered.length < 1) {
                     const message = 'OrbitOn ne peut contenir que mercure, mars, venus, terre, jupiter, saturne, uranus ou neptune.';
                     res.status(400).json({message});
                 }
     
             } else {
                 return Satellite.findAndCountAll({where: {
                     name: {
                         [Op.like]: `%${search}%`
                     }
                 }})
                 .then(({count, rows}) => {
                    const message = `Il y a ${count} satellites qui correspondent à la recherche.`;
                    res.json({message, data: rows}) 
                 })
                 .catch(error => {
                    const message = 'La liste des satellites n\'a pas pu etre récupérée, essayer ultérieurement';
                    res.status(500).json({message, data: error});
                })
             }

            
        } else {

            if(req.query.orbitOn) {
                const orbitOnFiltered = planetOrbitOn.filter(el => {
                    if(el === req.query.orbitOn) {
                        return Satellite.findAndCountAll({where: {
                            orbitOn : el
                        }})
                        .then(({count, rows}) => {
                            const message = `Il y a ${count} satellites qui correspondent à la recherche.`;
                            res.json({message, data: rows}) 
                        })
                        .catch(error => {
                            const message = 'La liste des satellites n\'a pas pu etre récupérée, essayer ultérieurement';
                            res.status(500).json({message, data: error});
                        })
                    } 
                })
            
                if (orbitOnFiltered.length < 1) {
                    const message = 'OrbitOn ne peut contenir que mercure, mars, venus, terre, jupiter, saturne, uranus ou neptune.';
                    res.status(400).json({message});
                }

            } else {

                Satellite.findAll()
                .then(sat => {
                    const message = 'La liste des satellites a bien été récupérée.';
                    res.json({message, data: sat})
                }) 
                .catch(error => {
                    const message = 'La liste des satellites n\'a pas pu etre récupérée, essayer ultérieurement';
                    res.status(500).json({message, data: error});
                })

            }
        }
    })
}