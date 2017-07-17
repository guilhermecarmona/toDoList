'use strict';

const Hapi = require('hapi');
const models = require('./resources/models/index'); //connect to the database and run sequelize models

//Create tables in DB
models.sequelize.sync().catch(function (err) {
    console.log(err);
});

const server = new Hapi.Server();
server.connection({ port: 8888, host: 'localhost' });

const routes = require('./resources/routes');
routes(server); //setting the routes

server.start((err) => {
    if(err) {
        throw err;
    }

    console.log('Servidor iniciado em: %s', server.info.uri);

});