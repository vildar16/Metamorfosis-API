const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ addSpecies, getSpeciesById, search, getCaterpillars, getButterflies, getButterfliesContributions, getCaterpillarsContributions }= require("../controllers/SpeciesController");

router.post('/addSpecies',
             [
                check('name', 'El nombre es obligatorio.').not().isEmpty(),
                check('scientificName', 'El primer apellido es obligatorio.').not().isEmpty(),
                check('family', 'La familia es requerida.').not().isEmpty(),
                check('genus', 'El género es requerido.').not().isEmpty(),
                check('district', 'El distrito es requerido.').not().isEmpty(),
                check('description', 'La descripción es requerida.').not().isEmpty(),
                check('stage', 'Debe indicar si es Mariposa o Oruga').not().isEmpty().isIn(["Oruga", "Mariposa"]),
                


            ]
             , addSpecies )

router.get('/getSpeciesById/:id', getSpeciesById)

router.get('/search/:word', search)

router.get('/getButterflies', getButterflies)

router.get('/getCaterpillars', getCaterpillars)

router.get('/getButterfliesContributions', getButterfliesContributions)

router.get('/getCaterpillarsContributions', getCaterpillarsContributions)




module.exports = router;