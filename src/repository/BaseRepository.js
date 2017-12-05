'use strict';
/**
 * Base class for repository pattern
 */
let self;

export default class BaseRepository {
    constructor(db, q, config, constants, collection) {
        self = this
        self.db = db;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.collection = collection;
    }

    _insert(object) {
        return self.db.collection(self.collection).insert(object)
            .then(obj => {
                return this.q.when(obj);
            })
            .catch(err => {
                console.error(err);
                return this.q.when(null);
            });
    }

    _find(query) {
        return self.db.collection(self.collection).findOne(query)
            .then(obj => {
                return this.q.when(obj);
            })
            .catch(err => {
                console.error(err);
                return this.q.when(null);
            });
    }
}