const express = require('express');
const cors = require('cors');
const app = express();



//----settings----
app.set('port', process.env.PORT || 4000); //revisa las varibles de entorno, si no encuentra nada asigna el puerto 4000


//----middlewares----
app.use(cors());
app.use(express.json());


//----routes----
app.use('/api/users', require('./routes/user'));
app.use('/api/facts', require('./routes/funFact'));


module.exports = app;