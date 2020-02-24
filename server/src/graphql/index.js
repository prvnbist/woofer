const { makeExecutableSchema } = require('graphql-tools')

const {
   User: UserType,
   Woof: WoofType,
   Query: QueryType,
   Response: ResponseType
} = require('./types')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
   typeDefs: [UserType, WoofType, QueryType, ResponseType],
   resolvers
})

module.exports = schema
