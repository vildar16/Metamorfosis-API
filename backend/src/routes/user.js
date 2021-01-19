const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const{ register, login, blockUser, findByEmail, getAllUsers, unlockUser}= require("../controllers/UserController");


// router.route('/register')
//     .post(register)

router.post('/register',
             [
                check('email', 'El formato del correo es incorrecto.').not().isEmpty().isEmail(),
                check('name', 'El nombre es obligatorio.').not().isEmpty(),
                check('lastname1', 'El primer apellido es obligatorio.').not().isEmpty(),
                check('lastname2', 'El segundo apellido es obligatorio.').not().isEmpty(),
                check('password', 'La contraseña debe tener al menos 6 dígitos.').isLength({min: 6})
            ]
             , register)

router.post('/login',
             [
                check('email', 'El formato del correo es incorrecto.').not().isEmpty().isEmail(),
                check('password', 'La contraseña debe tener al menos 6 dígitos.').isLength({min: 6})
             ] 
             ,login)

router.put('/blockUser/:id', blockUser)

router.put('/unlockUser/:id', unlockUser)

router.get('/findByEmail/:email', findByEmail)

router.get('/findAll/', getAllUsers)




module.exports = router;