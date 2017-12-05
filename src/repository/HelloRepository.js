'use strict'
import BaseRepository from './BaseRepository'

let self;

export default class HelloRepository extends BaseRepository {
    constructor(apiDb, q, config, constants) {
        super(apiDb, q, config, constants, config.dataModel.collection.hello)
        self = this;
        self.apiDb = apiDb;
        self.q = q;
        self.config = config;
        self.constants = constants;;
    }

    insertUser(user) {
        return self._insert(user)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }

    findUser(name) {
        let query = {
            "name": name
        }
        return self._find(query)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }
}

