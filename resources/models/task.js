'use strict';

// Model definition for the tasks - A task belongs to a TO-DO list

module.exports = (sequelize, DataTypes) => {
    const task = sequelize.define('task', {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                values: ['pending','completed'],
                defaultValue: 'pending'
            }
        },
        {
            classMethods: {
                associate: (models) => {
                    task.belongsTo(models.todo, {
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    })
                }
            }
        });
    return task;
};





