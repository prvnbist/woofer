const { makeExecutableSchema } = require('graphql-tools')

const { type: User } = require('./user')

const { type: Woof } = require('./woof')

const Queries = require('./queries')

const schema = makeExecutableSchema({
   typeDefs: [User, Woof, Queries],
   resolvers: {}
})

module.exports = schema
