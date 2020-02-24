const { gql } = require('apollo-server-express')

const typeDef = gql`
   interface Response {
      code: Int!
      status: Boolean!
      message: String!
   }
`

module.exports = typeDef
