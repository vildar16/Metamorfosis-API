const FunFactCtrl = {};
const FunFact = require('../models/FunFact');
const { validationResult } = require('express-validator');

FunFactCtrl.addFact = async (req, res) => {
    try{


        const errors = validationResult(req);
       
        if(!errors.isEmpty()){
            return res.status(400).json({
                ok:false,
                msg: errors.errors[0].msg
            })
        }
        const fact = await new FunFact( req.body );
        await fact.save()

        res.status(201).json({
            ok:true,
            msg: "Dato curioso ingresado correctamente."
        })

    }catch{
        res.status(500).json(
            {
                ok: false,
                msg: "Error."
            }
        )
    }
}

FunFactCtrl.getRandom = async (req, res) => {
    const count = await FunFact.countDocuments();
    const random = Math.floor(Math.random() * count)
    const resp = await FunFact.findOne().skip(random).exec()
    res.status(200).json({

        fact: resp.fact
    })

}

FunFactCtrl.getAllFacts = async (req, res) => { 
    const allFacts = await  FunFact.find()
    res.status(200).json({
        allFacts
    })

}

FunFactCtrl.deleteFact = async (req, res) => { 
    
    await FunFact.findByIdAndRemove(req.params.id)
    resp.status(200).json({
        ok: "ok"
    })

}




module.exports = FunFactCtrl;