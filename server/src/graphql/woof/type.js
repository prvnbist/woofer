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
   input CreateWoofInput {
      authorId: ID!
      message: String!
   }
   input ReplyWoofInput {
      authorId: ID!
      message: String!
      repliedTo: ID!
   }
`

module.exports = typeDef
