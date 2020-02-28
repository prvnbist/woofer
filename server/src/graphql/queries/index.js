const { gql } = require('apollo-server-express')

const typeDef = gql`
   type Query {
      "User's profile"
      user(id: ID!): User!
      "List of global woofs or by a user"
      woofs(id: ID): [Woof]!
      "Get a woof by woof ID"
      woof(id: ID!): Woof!
   }
`
module.exports = typeDef
