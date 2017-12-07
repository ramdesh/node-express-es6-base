
let self;

/**
 * Auth Service
 * @constructor
 */
export default class HelloService {
    constructor(config, 
                constants, 
                exceptionFactory,
                q,
                helloRepository) {

        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.exceptionFactory = exceptionFactory;
        self.helloRepository = helloRepository;
    }

    insertUser(name) {
        return self.helloRepository.insertUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    findUser(name) {
        return self.helloRepository.findUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

}
