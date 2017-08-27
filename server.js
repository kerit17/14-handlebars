//Dependencies
var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");

// **************************************
//Set up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

//Require models for syncing
var db = require("./models");

//Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("public"));
