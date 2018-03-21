'use strict';
/**
 * Base class for repository pattern
 */
let self;

export default class BaseRepository {
    constructor(q, config, constants, collection) {
        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
        self.collection = collection;
    }

    _insert(object, schema) {
        self.model = self.mongoose.model(self.collection, schema);

        let model = new self.model(object);
        let insert = self.q.nbind(model.save, model);

        return insert()
            .then((result) => {
                return result;
            });
    }

    _find(query, schema) {
        self.model = self.mongoose.model(self.collection, schema);

        let find = self.q.nbind(self.model.findOne, self.model);

        return find(query)
            .then((result) => {
                return self.q.when(result);
            });
    }

    _remove(query, schema) {
        self.model = self.mongoose.model(self.collection, schema);

        let remove = self.q.nbind(self.model.remove, self.model);

        return remove(query)
            .then((result) => {
                return self.q.when(result);
            });
    }

    _update(query, updateDoc, schema) {
        self.model = self.mongoose.model(self.collection, schema);

        let update = self.q.nbind(self.model.update, self.model);

        return update(query, updateDoc)
            .then((result) => {
                return self.q.when(result);
            });
    }

    _bulkInsert(docs, schema) {
        self.model = self.mongoose.model(self.collection, schema);

        let insert = self.q.nbind(self.model.insertMany, self.model);

        return insert(docs)
            .then((result) => {
                return self.q.when(result);
            });
    }
}