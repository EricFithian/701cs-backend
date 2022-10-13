// This is requiring in the connection that's linking to my Mongo Atlas
require('../config/db.connection')

module.exports = {
    PotentialConnection: require('./PotentialConnection'),
    Post: require('./Post'),
    User: require('./User'),
    Connection: require('./Connection'),
}