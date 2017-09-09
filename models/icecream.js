//Import ORM to create function to interact with database
var orm = require("../config/orm.js");

var icecream = {
	all: function(cb){
		orm.all("icecream", function(res){
		cb(res);
		});
	},

	create: function(cols, vals,cb){
		orm.create("icecream", cols, vals, function(res){
			cb(res);
		});
	},

	update: function(objColVals, condition, cb){
		orm.update("icecream", objColVals, condition, function(res){
			cb(res);
		});
	}
};

//Export the database functions for the controller (ic_controller.js)
module.exports = icecream;