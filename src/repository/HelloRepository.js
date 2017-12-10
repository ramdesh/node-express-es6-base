'use strict'
import BaseRepository from './BaseRepository'

let self;

export default class HelloRepository extends BaseRepository{
    constructor(q, config, constants, mongoose) {
        super(q, config, constants)
        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.mongoose = mongoose;

        let Schema = self.mongoose.Schema;
        let helloUserSchema = self.mongoose.Schema({
            name: String
        }, { collection: config.dataModel.collection.hello});

        self.model = self.mongoose.model(config.dataModel.collection.hello, helloUserSchema);
    }

    insertHelloUser(name) {
        let tempUser = new self.model({
            name: name
        });

        return self._insert(tempUser)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }

    findHelloUser(name) {
        let query = {
            name: name
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

