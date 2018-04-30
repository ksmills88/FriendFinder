var express = require("express"),
 bodyParser = require("body-parser"),
 app = express();
var path = require("path");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static(__dirname + '/public'));

// req routes

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
    console.log("listening on PORT " + PORT);
})