import express from 'express';

let self, router = new express.Router();

export default class Router {

    constructor(helloController, constants) {
        self = this;
        self.constants = constants;

        const path = `${self.constants.V1}`; 
        console.log('http://{hostname}' + path);
        router.use(`${path}/hello`, helloController);

        return router;
    }
}