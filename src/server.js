import http from 'http';
import * as constants from './utils/constants';
import config from './config/Configuration';
import app from './app';

const server = http.createServer(app);
let port = process.env.PORT || config.port;
server.listen(port, function () {
    console.log(`Listening on port ${port}`);
});


//Stop process killing on exceptions
process.on('uncaughtException', function (err) {
    console.log('UncaughtException : %s', err.stack ? err.stack : err);
});

server.on('uncaughtException', function (req, res, next, err) {
    console.log('UncaughtException : %s', err.stack ? err.stack : err);
    return res.status(constants.INTERNAL_ERROR).send(err.message);
});

server.on('error', function (err) {
    console.log('Error : %s', err.stack ? err.stack : err);
    switch (err.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
    }
});
