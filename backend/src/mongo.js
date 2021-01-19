
const mongoose = require('mongoose');

const URI = 'mongodb+srv://meta_ap:mox0UuteE2rc34y0@metamorfosis.avnoo.mongodb.net/metamorfosis'
 
    //: 'mongodb://localhost/metamorfosis';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongo is connected...');
});