// A GET route with the url /api/friends (this iwll be used to display a JSON of all possible friends)
// A POST route /api/friends (this will be used to handle incoming survey results. THis route will also be used to handle the compatibility logic.)


const friendData = require('../data/friends');

module.exports = function(app) {

	// Display friend JSON
	app.get('/api/friends',function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friend', function(req, res) {
		// Pushes new data to friends JSON in JSON format
		friendData.push(req.body);
		console.log(friendData);
		// Displays it for the user when posted
		res.json(friendData);
	});
}