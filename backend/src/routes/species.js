const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ addSpecies, getSpeciesById, getButterflies, getCaterpillars }= require("../controllers/SpeciesController");

router.post('/addSpecies',
             [
                check('name', 'El nombre es obligatorio.').not().isEmpty(),
                check('scientificName', 'El primer apellido es obligatorio.').not().isEmpty(),
                check('family', 'La familia es requerida.').not().isEmpty(),
                check('genus', 'El género es requerido.').not().isEmpty(),
                check('district', 'El distrito es requerido.').not().isEmpty(),
                check('description', 'La descripción es requerida.').not().isEmpty(),
                check('stage', 'La etapa es requerida.').not().isEmpty(),
                check('stage', 'La etapa debe ser Mariposa o Oruga.').isIn(['Mariposa', 'Oruga']),


            ]
             , addSpecies )

router.get('/getSpeciesById/:id', getSpeciesById)

router.get('/getButterflies/', getButterflies)

router.get('/getCaterpillars/', getCaterpillars)



module.exports = router;