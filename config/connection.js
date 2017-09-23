//Set up mySQL connection
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
	connection = mysql.createConnection({
	// port: 3306,
	host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "vnasomtdyewswjnx",
	password: "txnsbcvj9wmt0tky",
	database: "v15xj7paspcqjgkb"
	})
};

//Make connection
connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

//Export connection for ORM use
module.exports = connection;