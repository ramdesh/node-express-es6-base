let self;
/**
 * CrossOriginMW Middleware
 * @constructor
 */
export default class CrossOriginMW {

    constructor() {
        self = this;
    }

    middleware(req, res, next) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('X-Content-Type-Options', 'nosniff');
        res.header('X-Frame-Options', 'DENY');

        if ('OPTIONS' === req.method) {
            res.sendStatus(200);
        } else {
            next();
        }
    };

}
