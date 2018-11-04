// # STEPS TO SEQUELIZE THE STAR WARS APP

// * Install the sequelize and mysql2 npm packages.
// * Delete the orm from config. In your app folder, create a model folder with a character.js file in the model
// * In character.js, model out the character table, as detailed in the schema.sql file located in the root of this project directory.
// * Remove all references to the old orm file and replace it with character.js
// * Use Sequelize methods in place of the orm calls to retrieve and insert data.
// * Update connection.js to use sequelize instead of the mysql package.
// CREATE TABLE burgers
// (
// 	id int NOT NULL AUTO_INCREMENT,
// 	name varchar(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT false,
// 	PRIMARY KEY (id)
// );
module.exports = function (sequelize, DataTypes) {
  const burgers = sequelize.define("burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burgers;
};