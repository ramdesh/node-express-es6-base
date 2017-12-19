
let self;

/**
 * Hello Service
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

    insertHelloUser(name) {
        return self.helloRepository.insertHelloUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    findHelloUser(name) {
        return self.helloRepository.findHelloUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    updateHelloUser(name, user) {
        return self.helloRepository.updateHelloUser(name, user)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    removeHelloUser(name) {
        return self.helloRepository.removeHelloUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    insertBulkHelloUsers(usersArray) {
        return self.helloRepository.insertBulkHelloUsers(usersArray)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }
}
