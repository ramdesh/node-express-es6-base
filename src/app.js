import express from 'express';
import bodyParser from 'body-parser';
import * as constants from './utils/constants';
import container from './ConfigIoc';

let app = express();

// Use middleware as required
app.use(bodyParser.json({ limit: constants.REQUEST_LIMIT_KB + "kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

let crossOriginMW = container.resolve('crossOriginMW');
app.use(crossOriginMW.middleware);

// Base router
app.use('/', container.resolve('router'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = constants.NOT_FOUND;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.status(err.httpStatusCode || constants.INTERNAL_ERROR);
    res.json({
        code: err.name,
        error: err.message,
        stack: err.stack
    });
    return next();
});

export default app;