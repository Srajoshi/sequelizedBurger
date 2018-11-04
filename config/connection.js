// Set up MySQL connection.
var Sequelize = require("sequelize");

var sequelize = new Sequelize;
mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});

// var sequelize = new Sequelize("sequelize_library", "root", "", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Exports the connection for other files to use
module.exports = sequelize;