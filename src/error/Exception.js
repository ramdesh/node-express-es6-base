
let self;

/**
 * Exception Controller
 * @constructor
 */
class Exception {
    constructor(errorCode, statusCode, formatValuesArray, config, helpersUtil) {
        self = this;
        self.name = (errorCode || 'E0000');
        self.httpStatusCode = (statusCode || 500);
        self.message = helpersUtil.stringFormat(config.errors[self.name], formatValuesArray);
        self.stack = (new Error()).stack;
    }
}

export default Exception;
