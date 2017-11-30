import awilix from 'awilix';
import router from './api/router';
import * as constants from './utils/constants';
import config from './config/Configuration';

// Import libraries
import express from 'express';
import underscore from 'underscore';
import q from 'q';
import swaggerJSDoc from 'swagger-jsdoc';

// Import Middleware
import CrossOriginMW from './middleware/CrossOriginMW';

// Import controllers
import HelloController from './api/hello/HelloController';

// Import Factories
import ExceptionFactory from './error/ExceptionFactory';



let container = awilix.createContainer({
    resolutionMode: awilix.ResolutionMode.CLASSIC
});

console.log("Initializing Swagger API documentation...");
let swaggerDefinition = {
    info: {
        title: 'RESTful web services for node/express/es6 starter',
        version: '1.0.0',
        description: 'Documentation for node/express/es6 starter',
    },
    host: 'localhost:3001',
    basePath: '/v1/',
    schemes: ['http'],
    consumes: ["application/json"],
    produces: ["application/json"]
};
let options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['dist/api/**/*.js']
};
let swaggerSpec = swaggerJSDoc(options);

console.log("Registering dependencies...");
container.register({
    // Register libraries
    q: awilix.asValue(q),
    express: awilix.asValue(express),
    underscore: awilix.asValue(underscore),
    router: awilix.asClass(router).singleton(),
    config: awilix.asValue(config),
    exceptionFactory: awilix.asClass(ExceptionFactory).singleton(),
    constants: awilix.asValue(constants),

    // Register middleware
    crossOriginMW: awilix.asClass(CrossOriginMW).singleton(),

    // Register controllers
    helloController: awilix.asClass(HelloController).singleton()

});

export default container;