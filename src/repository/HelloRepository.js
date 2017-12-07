'use strict'
import BaseRepository from './BaseRepository'

let self, User;

export default class HelloRepository {
    constructor(q, config, constants, mongoose) {
        // super(apiDb, q, config, constants, config.dataModel.collection.hello)
        self = this;
        // self.apiDb = apiDb;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.mongoose = mongoose;

        let Schema = self.mongoose.Schema;
        let helloUserSchema = self.mongoose.Schema({
            name: String
        });

        User = self.mongoose.model('User', helloUserSchema);
    }

    insertUser(name) {
        let tempUser = new User({
            name: name
        });
        // let insertUser = self.q.nbind(User.save, User);

        return tempUser.save()
            .then((result) => {
                return result;
            })
    }

    findUser(name) {
        let findUser = self.q.nbind(User.findOne, User);
        return findUser({name: name})
            .then((result) => {
                return self.q.when(result);
            })
    }
}

