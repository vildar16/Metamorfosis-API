const UserCtrl = {};
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');



UserCtrl.register = async (req, res) => {

    const{email, password} = req.body;


    try {

        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                ok:false,
                msg: 'Ese email ya está registrado'

            })
        }

        user = await new User( req.body );

        //encriptar password
        const salt = await bcrypt.genSaltSync();
        user.password = await bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            id: user._id,
            name: user.name
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
    }

}


UserCtrl.login = async (req, res) => {
    const {email, password} =req.body;

    try {
        let user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({
                ok:false,
                msg: 'Email incorrecto.'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'Contraseña incorrecta.'
            })
        }

        res.json({
            ok: true,
            uid: user._id,
            name: user.name,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })
    }



}

module.exports = UserCtrl;