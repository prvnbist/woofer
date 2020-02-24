const { gql } = require('apollo-server-express')

const typeDef = gql`
   type User {
      id: ID!
      name: String!
      bio: String
      image: String
      googleId: String!
      username: String
      email: String!
      woofCount: Int!
      woofs: [Woof]!
      followerCount: Int!
      followers: [User]!
      followingCount: Int!
      following: [User]!
      isActive: Boolean!
      likedCount: Int!
      likedWoofs: [Woof]!
   }
`
module.exports = typeDef
