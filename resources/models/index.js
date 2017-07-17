'use strict';

const config = require('../config'); //database details
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const db = {};

//Connecting to the DB
const sequelize = new Sequelize(config.db_name,config.db_user, config.db_pass, {
    host: config.host,
    dialect: 'mysql'
});

// Reading all Model files in directory models/ (excluding this file) and importing them in sequelize
  fs.readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    )
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.todo.hasMany(db.task, {onDelete: 'CASCADE', onUpdate: 'CASCADE'}); // setting dependency

module.exports = db;