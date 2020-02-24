const { gql } = require('apollo-server-express')

const typeDef = gql`
   type Woof {
      id: ID!
      message: String!
      images: [String]!
      author: User!
      likesCount: Int!
      likes: [User]!
      repliesCount: Int!
      replies: [User]!
   }
`

module.exports = typeDef