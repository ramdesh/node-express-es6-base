let self;

export default class HelloController {
    constructor(express, helloService) {
        self = this;
        self.expressRouter = new express.Router();
        self.helloService = helloService;

        self.expressRouter.get('/input/:name', self.printHello);

        return self.expressRouter;
    }

    printHello(req, res, next) {
        self.helloService.printHello(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }
}