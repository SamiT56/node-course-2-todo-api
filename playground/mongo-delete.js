const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.db('TodoApp').collection('Todos').deleteMany({text:'eat lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	// deleteOne
	// db.db('TodoApp').collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.db('TodoApp').collection('Users').deleteMany({name: 'Sami'}).then((result) => {
	// 	console.log(result);
	// });	

	// db.db('TodoApp').collection('Users').findOneAndDelete({
	// 	_id: new ObjectID('5a40de27446f05ea02d29db9')
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	// db.close();
});