var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

 var User = mongoose.model('User',userSchema);
 module.exports  = { User};