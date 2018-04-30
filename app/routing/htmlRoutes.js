// Routes: 
// GET Route to /survey
// A default catch all route that leads to home.html which displays the home page


const path = require('path');

module.exports = function(app) {

	// connects to survey page 
	app.get('/survey',function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// connects to home page
	app.get('/', function(req, resp) {
		resp.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}