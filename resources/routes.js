'use strict';

const Joi = require('joi');
const handlers = require('./handlers');

module.exports = function Routes(server) {

    /* ------ TO-DO List Routes ------ */

    //Read TO-DO Lists
    server.route({
        method: 'GET',
        path: '/todos',
        handler: handlers.readToDoLists
    });

    //Read TO-DO List by ID
    server.route(
        {
            method: 'GET',
            path: '/todo/{id}',
            handler: handlers.readToDoList
        });

    //Create TO-DO List
    server.route({
        method: 'POST',
        path: '/todo',
        config: {
            handler: handlers.createToDoList,
            validate: {
                payload: {
                    title: Joi.string().required()
                }
            }
        }
    });

    //Update TO-DO List
    server.route({
        method: 'PUT',
        path: '/todo/{id}',
        config: {
            handler: handlers.updateToDoList,
            validate: {
                payload: {
                    title: Joi.string().required()
                }
            }
        }
    });

    //Delete TO-DO List
    server.route({
        method: 'DELETE',
        path: '/todo/{id}',
        handler: handlers.deleteToDoList
    });


    /* ------ Tasks(to-do lists' Items) Routes ------- */

    //Read ALL Tasks
    server.route({
        method: 'GET',
        path: '/tasks',
        handler: handlers.readAllTasks
    });

    //Read Task by ID
    server.route(
        {
            method: 'GET',
            path: '/task/{id}',
            handler: handlers.readTask
        });

    //Read All Tasks by TO-DO List ID
    server.route(
        {
            method: 'GET',
            path: '/todo/{id}/tasks',
            handler: handlers.readToDoListTasks
        });

    //Create a new Task
    server.route({
        method: 'POST',
        path: '/todo/{id}/task',
        config: {
            handler: handlers.createTask,
            validate: {
                payload: {
                    title: Joi.string().required()
                }
            }
        }
    });

    //Update a Task
    server.route({
        method: 'PUT',
        path: '/task/{id}',
        handler: handlers.updateTask
    });

    //Delete a Task
    server.route({
        method: 'DELETE',
        path: '/task/{id}',
        handler: handlers.deleteTask
    });


};