const { Router } = require('express');
const router = Router();


const{ addDistritoMariposas, getDMByCode, sumMariposa }= require("../controllers/DistritoMariposasController");




router.post('/addDM', addDistritoMariposas)

router.get('/getByCode/:code', getDMByCode)

router.put('/sumOne/:code', sumMariposa)





module.exports = router;