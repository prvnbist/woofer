const { gql } = require('apollo-server-express')

const typeDef = gql`
   type Woof {
      id: ID!
      message: String!
      author: User!
      likesCount: Int!
      likes: [User]!
      repliesCount: Int!
      replies: [Woof]!
      isActive: Boolean!
   }
`

module.exports = typeDef
