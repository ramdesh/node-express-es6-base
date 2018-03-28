module.exports = {
    env: 'DEV',
    port: 3001,
    clusteringEnabled: false,
    errors: require("../ConfigErrors"),

    DB: {
      mongodb: {
        nodebaseapp: {
          connection: "mongodb://nodebaseapp:nodebaseapp1@ds129386.mlab.com:29386/node-app",
        }
      }
    },

    dataModel: {
      collection: {
        user: "User"
      }
    }
};