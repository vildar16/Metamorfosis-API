const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ addFact, getRandom, deleteFact, getAllFacts}= require("../controllers/FunFactController");


// router.route('/register')
//     .post(register)

router.post('/addFact',
             [
                
                check('fact', 'El fact es obligatorio.').not().isEmpty()
                
            ]
             , addFact)

router.get('/getRandomFact',
              getRandom)


router.delete('/delete/:id', deleteFact)

router.get("/getAll/", getAllFacts)


module.exports = router;