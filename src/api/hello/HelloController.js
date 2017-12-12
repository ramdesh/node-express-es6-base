let self;

export default class HelloController {
    constructor(express, helloService, constants) {
        self = this;
        self.expressRouter = new express.Router();
        self.helloService = helloService;
        self.constants = constants;
        
        self.expressRouter.post('/input', self.insertHelloUser);
        self.expressRouter.get('/fetch/:name', self.findHelloUser);

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
}