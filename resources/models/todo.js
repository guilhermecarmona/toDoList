'use strict';

// Model definition for the TO-DO List

module.exports = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        classMethods: {
            associate: (models) => {
                toDo.hasMany(models.task);
            }
        }
    });

    return todo;
};




