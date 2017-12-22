let self;

export default class UserController {
    constructor(express, userService, constants) {
        self = this;
        self.expressRouter = new express.Router();
        self.userService = userService;
        self.constants = constants;
        
        self.expressRouter.post('/input', self.insertUser);
        self.expressRouter.post('/bulk', self.insertBulkUsers);

        self.expressRouter.put('/update/:name', self.updateUser);

        self.expressRouter.get('/fetch/:name', self.findUser);

        self.expressRouter.delete('/remove/:name', self.removeUser);

        return self.expressRouter;
    }

    insertUser(req, res, next) {
        self.userService.insertUser(req.body.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    findUser(req, res, next) {
        self.userService.findUser(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    updateUser(req, res, next) {

        self.userService.updateUser(req.params.name, req.body)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    removeUser(req, res, next) {
        self.userService.removeUser(req.params.name)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }

    insertBulkUsers(req, res, next) {
        self.userService.insertBulkUsers(req.body)
            .then((result) => {
                res.status(self.constants.SUCCESS).json(result);
            })
            .catch((err) => {
                return next(err);
            });
    }
}