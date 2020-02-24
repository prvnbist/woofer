const { makeExecutableSchema } = require('graphql-tools')

const { type: User } = require('./user')

const { type: Woof } = require('./woof')

const Queries = require('./queries')
const Mutations = require('./mutations')

const schema = makeExecutableSchema({
   typeDefs: [User, Woof, Queries, Mutations],
   resolvers: {}
})

module.exports = schema
