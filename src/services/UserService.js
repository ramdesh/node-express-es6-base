
let self;

/**
 * User Service
 * @constructor
 */
export default class UserService {
    constructor(config, 
                constants, 
                exceptionFactory,
                q,
                userRepository) {

        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.exceptionFactory = exceptionFactory;
        self.userRepository = userRepository;
    }

    insertUser(name) {
        return self.userRepository.insertUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    findUser(name) {
        return self.userRepository.findUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    updateUser(name, user) {
        return self.userRepository.updateUser(name, user)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    removeUser(name) {
        return self.userRepository.removeUser(name)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }

    insertBulkUsers(usersArray) {
        return self.userRepository.insertBulkUsers(usersArray)
            .then((result) => {
                return self.q.when(result);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when(null);
            });
    }
}
