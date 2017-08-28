//Import orm to create function to interact with database
var orm = require("../config/orm.js");

var icecream = {
	selectAll: function(cb){
		orm.selectAll("icecream", function(res){
		ch(res);
		});
	},

//same for one
//same for udpate

}