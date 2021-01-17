const SpeciesCtrl = {};
const Species = require('../models/Species');
const { validationResult } = require('express-validator');



SpeciesCtrl.addSpecies = async (req, res) => {

    try {

        const errors = validationResult(req);
       
        if(!errors.isEmpty()){
            return res.status(400).json({
                ok:false,
                msg: errors.errors[0].msg
            })
        }

        const species = await new Species( req.body );

        await species.save();

        res.status(201).json({
            ok: true,
            msg: "Especie creada correctamente."
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
    }

}


SpeciesCtrl.getSpeciesById = async (req, res) => {
    try {

        const species = await Species.findById(req.params.id);

        res.status(200).json({
            ok: true,
            result: species
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
        
    }
}
module.exports = SpeciesCtrl;

SpeciesCtrl.getButterflies = async (req, res) => {
    try {

        const species = await Species.find({stage: "Mariposa"});
        res.status(200).json({
            ok: true,
            result: species
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
        
    }
}


SpeciesCtrl.getCaterpillars = async (req, res) => {
    try {

        const species = await Species.find({stage: "Oruga"});
        res.status(200).json({
            ok: true,
            result: species
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
        
    }
}
module.exports = SpeciesCtrl;