var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// console.log(`mongoose ${process.env.MONGODB_URI}`);
mongoose.connect(process.env.MONGODB_URI ,(err, db) => {
    if(err){
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server');
});

module.exports = {mongoose};

