const Sequelize = require('sequelize');

const database = require('./db');

const Blog = database.define('items', {

	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	title:
	{
		type: Sequelize.STRING,
		allowNull: false,
	},
	content:
	{
		type: Sequelize.TEXT,
		allowNull: false
	},
	createdAt:
	{ 
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW 
	},
	picture:
	{
		type: Sequelize.STRING
	},
	author:
	{
		type: Sequelize.STRING,
		allowNull: false,
	},
	contact_details:
	{
		type: Sequelize.TEXT,
		allowNull: false,
	},
	tag:
	{
		type: Sequelize.STRING,
		allowNull: false,

	}

});

module.exports.Blog = Blog;

database.sync();
