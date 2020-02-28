const { gql } = require('apollo-server-express')

const typeDef = gql`
   type User {
      id: ID!
      name: String!
      bio: String
      image: String!
      googleId: String!
      username: String
      email: String!
      woofCount: Int!
      woofs: [Woof]!
      followersCount: Int!
      followers: [User]!
      followingCount: Int!
      following: [User]!
      isActive: Boolean!
      likedCount: Int!
      likedWoofs: [Woof]!
   }
   input CreateUserInput {
      name: String!
      image: String!
      googleId: String!
      email: String!
   }
   input UpdateUserInput {
      id: ID!
      name: String
      bio: String
      username: String
   }
`
module.exports = typeDef
