const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id ='5a5b9b29ebd67a29205e0586';
// var id ='6a5b9b29ebd67a29205e0586';
// var id ='5a5b9b29ebd67a29205e05861';

// if (!ObjectID.isValid(id)) {
// 	console.log('Invalid Id');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found')
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5a524ecb8fab6a08ad1b700d';

// if (!ObjectID.isValid(userId)) {
// 	console.log("Invalid User Id");
// };

User.findById(userId).then((user) => {
	if(!user) {
		return console.log("Unable to find user");
	}
	console.log('User', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));