const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.db('TodoApp').collection('Todos').find({
	// 	_id: new ObjectID('5a404735b25374cd63d0e044')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	// db.db('TodoApp').collection('Todos').find({}).count().then((count) => {
	// 	console.log(`Todos count ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// });

	db.db('TodoApp').collection('Users').find({name: 'Sami'}).toArray().then((docs) => {
		console.log(`Users`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err)
	});

	// db.close();
});