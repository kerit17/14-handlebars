DROP DATABASE IF EXISTS iceCream_db;

-- Create the db
CREATE DATABASE iceCream_db;

-- Switch to or use the db
USE iceCream_db;

-- Create a table with these fields: (1) id: an auto incrementing int that serves as the primary key, (2) icCream_name: a string, (3) devoured: a boolean, (4) date: a TIMESTAMP.
CREATE TABLE iceCream
(
	id int NOT NULL auto_increment,
    iceCream_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP NOT NULL,
    primary key (id)
);