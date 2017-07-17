'use strict';

const todo = require('./models').todo;
const task = require('./models').task;

exports.readToDoLists = (request, reply) =>
{
    todo.findAll({})
        .then(function(todos) {
            reply(todos);
        })
        .catch(function(err) {
            reply(err);
        });

};

exports.readToDoList = (request, reply) =>
{
    todo.findById(request.params.id,{
        include: [{
            model: task,
            as: 'tasks'
        }]})
        .then(function(todos) {
            reply(todos);
        })
        .catch(function(err) {
            reply(err);
        });

};

exports.createToDoList = (request,reply) =>
{
    var newToDo = {
        title: request.payload.title
    };
    todo.create(newToDo)
        .then(function(todos) {
            reply(todos);
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });
};


exports.updateToDoList = (request,reply) =>
{
    var updateToDo = {
        title: request.payload.title
    };
    todo.update(
            updateToDo,
            { where: { id: request.params.id}}
        )
        .then(function(todos) {
            var res = { rows: todos[0] }
            reply(JSON.stringify(res)).type('application/json');
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });
};

exports.deleteToDoList = (request,reply) =>
{
    todo.destroy(
            { where: { id: request.params.id}}
        )
        .then(function(){
            reply().code(204);
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });
};


exports.readAllTasks = (request, reply) =>
{
    task.findAll({})
        .then(function(tasks) {
            reply(tasks);
        })
        .catch(function(err) {
            reply(err);
        });

};

exports.readTask = (request, reply) =>
{
    task.findById(request.params.id)
        .then(function(tasks) {
            reply(tasks);
        })
        .catch(function(err) {
            reply(err);
        });

};

exports.readToDoListTasks = (request, reply) =>
{
    const tdid = request.params.id;
    task.findAll(
        { where: { todoId: tdid }}
    )
        .then(function(tasks) {
            reply(tasks);
        })
        .catch(function(err) {
            reply(err);
        });

};

exports.createTask = (request,reply) =>
{
    var newTask = {
        title: request.payload.title,
        status: request.payload.status,
        todoId: request.params.id
    };
    task.create(newTask)
        .then(function(tasks) {
            reply(tasks);
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });
};

exports.updateTask = (request,reply) =>
{
    task.update(request.payload,
        {
            fields: Object.keys(request.payload),
            where: { id: request.params.id}
        }
    )
        .then(function(tasks) {
            var res = { rows: tasks[0] }
            reply(JSON.stringify(res)).type('application/json');
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });

};

exports.deleteTask = (request,reply) =>
{
    task.destroy(
        { where: { id: request.params.id}}
    )
        .then(function(){
            reply().code(204);
        })
        .catch(function(err) {
            reply(err);
            console.log(err);
        });
};