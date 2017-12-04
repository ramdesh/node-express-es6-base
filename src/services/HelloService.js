
let self;

/**
 * Auth Service
 * @constructor
 */
export default class HelloService {
    constructor(config, 
                constants, 
                exceptionFactory, q) {

        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.exceptionFactory = exceptionFactory;
    }

    printHello(name) {
        // return self.authRepository.printHello()
        //     .then((token) => {
        //         return self.q.when(token);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         return self.q.when(null);
        //     });
        console.log("Hello, " + name); 
    }

}
