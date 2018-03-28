import express from 'express';

let self, router = new express.Router();

export default class Router {

    constructor(userController, constants, swaggerSpec) {
        self = this;
        self.constants = constants;
        self.swaggerSpec = swaggerSpec;

        function loadSwagger(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        }      

        const path = `${self.constants.V1}`; 
        console.log('http://{hostname}' + path);
        router.use(`/swagger`, loadSwagger)
        router.use(`${path}/users`, userController);

        return router;
    }
}