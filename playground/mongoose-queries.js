const {ObjectID} = require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '596e2da48e5e9f223fa17647';

User.find({
    _id: '596e2da48e5e9f223fa17647'
}).then((user) => {
    console.log(user);
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('User: ',user);
});

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}
Todo.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by id : ',user);
}).catch((e) => console.log(e));





