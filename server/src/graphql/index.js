const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

const { type: User, resolvers: UserResolvers } = require('./user')

const { type: Woof } = require('./woof')

const Queries = require('./queries')
const Mutations = require('./mutations')

const schema = makeExecutableSchema({
   typeDefs: [User, Woof, Queries, Mutations],
   resolvers: merge(UserResolvers)
})

module.exports = schema
