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


SpeciesCtrl.search = async (req, res) => {

    const keyWord = req.params.word;
    
    try {
        Species.find({ $or: [{ family: { $regex: keyWord, $options: 'i' }, accepted: true},
                             { genus: { $regex: keyWord, $options: 'i' }, accepted: true},
                             { tags: { $regex: keyWord, $options: 'i'}, accepted: true},
                             { name: { $regex: keyWord, $options: 'i'}, accepted: true},
                             { scientificName: { $regex: keyWord, $options: 'i'}, accepted: true}] }, 
            function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.status(200).json(result);
            }
          }).sort({name: 1})
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong...'

        })
        
    }

}

SpeciesCtrl.getButterflies = async (req, res) => {
    const result = await Species.find({stage: 'Mariposa', accepted: true})
    res.status(200).json({
        result
    })

}

SpeciesCtrl.getCaterpillars = async (req, res) => {
    const result = await Species.find({stage: 'Oruga', accepted: true})
    res.status(200).json({
            result
    })

}

SpeciesCtrl.getButterfliesContributions = async (req, res) => {
    const result = await Species.find({stage: 'Mariposa', accepted: false})
    res.status(200).json({
        result
    })

}

SpeciesCtrl.getCaterpillarsContributions = async (req, res) => {
    const result = await Species.find({stage: 'Oruga', accepted: false})
    res.status(200).json({
            result
    })

}


module.exports = SpeciesCtrl;