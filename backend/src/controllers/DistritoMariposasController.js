const DistritoMariposasCtrl = {};
const DistritoMariposas = require('../models/DistritoMariposas');
const { validationResult } = require('express-validator');
const { response } = require('express');



DistritoMariposasCtrl.addDistritoMariposas = async (req, res) => {

    try {

        const nd = await new DistritoMariposas( req.body );

        await nd.save();

        res.status(201).json({
            ok: true,
            msg: "Distrito mariposas creado correctamente"
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
    }

}


DistritoMariposasCtrl.getDMByCode = async (req, res) => {
    try {

        const dm = await DistritoMariposas.find({codigo: req.params.code});
        console.log(dm)
        res.status(200).json({
            ok: true,
            result: dm
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })  
        
    }
}

DistritoMariposasCtrl.sumMariposa = async  (req, res) => {
    const dm = await DistritoMariposas.find({codigo: req.params.code});
    
    console.log(dm)

    const sum = dm[0].mariposas + 1
    await DistritoMariposas.findOneAndUpdate({codigo: req.params.code}, {mariposas: sum})
    res.status(200).json({
        ok: true,
        result: sum
    })
}


module.exports = DistritoMariposasCtrl;