const {ObjectID} = require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove
// Todo.remove({}).then((result) => {
//     console.log(result);
// });
Todo.findByIdAndRemove('597b4dedbfdfd5f0ab992d88').then((todo) => {
    console.log(todo);
});
