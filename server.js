//Dependencies
var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");

// **************************************
//Set up the Express App
var PORT = process.env.PORT || 8000;
var app = express();

// Static directory
app.use(express.static("public"));

//Set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars
var exphbs = require ("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Inport routes and give server access
var routes = require("./controllers/ic_controller.js");
app.use("/", routes);

//Listener - start the server
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});
