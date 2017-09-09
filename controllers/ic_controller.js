//Dependencies
var express = require("express");
var router = express.Router();

//Import model (icecream.js) to use its database functions
var icecream = require ("../models/icecream.js");

//Create Routes and set up logic when required
router.get("/", function(req, res){
	icecream.all(function(data){
		var hbsObject = {
			icecream: data
		};
		console.log("hbsObject: " + hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	icecream.create([
		"iceCream_name", "devour"
		], [
		req.body.iceCream_name, req.body.devour
		], function() {
			res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log("condition: " + condition);

	icecream.update({
		devour: req.body.devour
	}, condition, function(){
		res.redirect("/");
	});
});

//Export route for server.js to use
module.exports = router;