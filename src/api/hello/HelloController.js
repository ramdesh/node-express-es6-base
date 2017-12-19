let self;

export default class HelloController {
    constructor(express, helloService, constants) {
        self = this;
        self.expressRouter = new express.Router();
        self.helloService = helloService;
        self.constants = constants;
        
        self.expressRouter.post('/input', self.insertHelloUser);
        self.expressRouter.post('/bulk', self.insertBulkHelloUsers);

        self.expressRouter.put('/update/:name', self.updateHelloUser);

        self.expressRouter.get('/fetch/:name', self.findHelloUser);

        self.expressRouter.delete('/remove/:name', self.removeHelloUser);

        return self.expressRouter;
    }

    insertHelloUser(req, res, next) {
        self.helloService.insertHelloUser(req.body.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    findHelloUser(req, res, next) {
        self.helloService.findHelloUser(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    updateHelloUser(req, res, next) {

        self.helloService.updateHelloUser(req.params.name, req.body)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    removeHelloUser(req, res, next) {
        self.helloService.removeHelloUser(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    insertBulkHelloUsers(req, res, next) {
        self.helloService.insertBulkHelloUsers(req.body)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }
}