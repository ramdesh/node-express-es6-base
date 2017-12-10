'use strict';
/**
 * Base class for repository pattern
 */
let self;

export default class BaseRepository {
    constructor(q, config, constants) {
        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;
    }

    _insert(object) {
        let insert = self.q.nbind(object.save, object);

        return insert()
            .then((result) => {
                return result;
            })
    }

    _find(query) {
        let find = self.q.nbind(self.model.findOne, self.model);

        return find(query)
            .then((result) => {
                return self.q.when(result);
            })
    }
}