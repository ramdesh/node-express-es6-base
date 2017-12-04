'use strict';

let self;

export default class HelloRepository {
    constructor(apiDb,q, config, constants, lazyjs) {
        self = this;
        self.q = q;
        self.config = config;
        self.constants = constants;;
    }

    findAll(orgId, userId) {
        return this._fetch(this.config.dataModel.designs.getAll,
            this.config.dataModel.views.getAll,selector)
            .then((resultSet) => {
                // return this.helpersUtil.extractViewDocResultSet(resultSet, this.idProp);
            })
            .catch((err) => {
                console.log(err);
                return self.q.when([]);
            });
    }
}

