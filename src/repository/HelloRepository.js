'use strict'
import BaseRepository from './BaseRepository'

let self, schema;

export default class HelloRepository extends BaseRepository {
    constructor(q, config, constants, mongoose) {
        super(q, config, constants, config.dataModel.collection.hello);
        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.mongoose = mongoose;

        let Schema = self.mongoose.Schema;
        let schemaStructure = {
            name: String
        }
        schema = self.mongoose.Schema(schemaStructure, { collection: self.config.dataModel.collection.hello });
    }

    insertHelloUser(name) {
        let tempUser = {
            name: name
        };

        return self._insert(tempUser, schema)
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

        return self._find(query, schema)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }

    updateHelloUser(name, updateUser) {
        let query = {
            name: name
        }

        return self._update(query, updateUser, schema)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }

    removeHelloUser(name) {
        let deleteUser = {
            name: name
        };

        return self._remove(deleteUser, schema)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }

    insertBulkHelloUsers(users) {

        return self._bulkInsert(users, schema)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                console.log(err);
                return self.q.when({});
            });
    }
}

