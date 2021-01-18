const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ addSpecies, getSpeciesById, search, getCaterpillars, getButterflies, getButterfliesContributions, getCaterpillarsContributions, addTags, addPhoto, acceptSpecies, updateSpecies, deleteSpecies }= require("../controllers/SpeciesController");

router.post('/addSpecies',
             [
                check('name', 'El nombre es obligatorio.').not().isEmpty(),
                check('scientificName', 'El nombre científico es obligatorio.').not().isEmpty(),
                check('family', 'La familia es requerida.').not().isEmpty(),
                check('genus', 'El género es requerido.').not().isEmpty(),
                check('description', 'La descripción es requerida.').not().isEmpty(),
                check('stage', 'Debe indicar si es Mariposa o Oruga').not().isEmpty().isIn(["Oruga", "Mariposa"]),
                


            ]
             , addSpecies )  //agregar una nueva especie

router.get('/getSpeciesById/:id', getSpeciesById) //obtener una especie por _id

router.get('/search/:word', search) //busca por nombre, nombre cientifico, tags, familia o genero

router.get('/getButterflies', getButterflies) //obtiene las mariposas aceptadas

router.get('/getCaterpillars', getCaterpillars) //obtiene las orugas aceptadas

router.get('/getButterfliesContributions', getButterfliesContributions) //obtiene aportes de mariposas

router.get('/getCaterpillarsContributions', getCaterpillarsContributions) //obtiene aportes de orugas

router.put('/addTag/:id', addTags) //agrega un tag a una especie

router.put('/addPhoto/:id', addPhoto) //agrega una foto a una especie

router.put('/accept/:id', acceptSpecies) //acepta una especie  accep=>true

router.put('/update/:id', updateSpecies) //actualiza una especie

router.delete('/delete/:id', deleteSpecies) //borra una especie





module.exports = router;