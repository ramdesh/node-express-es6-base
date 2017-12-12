import Exception from './Exception';
let self;

/**
 * Exception Factory Controller
 * @constructor
 */
class ExceptionFactory {
    constructor(config, helpersUtil) {
        self = this;
        self.config = config;
        self.helpersUtil = helpersUtil;
    }

    createInstance(errorCode, httpStatusCode, formatValuesArray) {
        let statusCode = httpStatusCode;
        if (typeof (httpStatusCode) === 'undefined' || httpStatusCode == null) {
            statusCode = 500;
        }

        return new Exception(errorCode, statusCode, formatValuesArray, self.config, self.helpersUtil);
    };


}

export default ExceptionFactory;