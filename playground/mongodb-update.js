const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
	if (err) {
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.db('TodoApp').collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a40fd3743681992cf369e52')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 		returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.db('TodoApp').collection('Users').findOneAndUpdate({ 
		_id: new ObjectID('5a404880eb56b6ce7e6e2dd7')
	}, { 
		$set: { 
			name: 'sami' 
		},
		$inc: { 
			age: 1 
		}
	}, { 
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	// db.close();
});

