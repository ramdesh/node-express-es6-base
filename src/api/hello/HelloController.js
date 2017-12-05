let self;

export default class HelloController {
    constructor(express, helloService, constants) {
        self = this;
        self.expressRouter = new express.Router();
        self.helloService = helloService;
        self.constants = constants;
        
        self.expressRouter.post('/input', self.insertUser);
        self.expressRouter.get('/fetch/:name', self.findUser);

        return self.expressRouter;
    }

    insertUser(req, res, next) {
        self.helloService.insertUser(req.body.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    findUser(req, res, next) {
        self.helloService.findUser(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }
}