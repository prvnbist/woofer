const { gql } = require('apollo-server-express')

const typeDef = gql`
   type Query {
      "List of users"
      users: [User]!
      "User's profile"
      user(id: ID!): User!
      "Get followers of a user"
      followers(id: ID!): [User]!
      "Get user's followings"
      following(id: ID!): [User]!
      "Get user's liked tweets"
      liked(id: ID!): [Woof]!
      "List of global woofs or by a user"
      woofs(id: ID): [Woof]!
      "Get a woof by woof ID"
      woof(id: ID!): Woof!
   }
`
module.exports = typeDef
