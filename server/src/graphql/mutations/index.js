const { gql } = require('apollo-server-express')

const typeDef = gql`
   interface MutationResponse {
      code: String!
      success: Boolean!
      message: String!
   }
   type UserResponse implements MutationResponse {
      code: String!
      success: Boolean!
      message: String!
      user: User
   }
   type WoofResponse implements MutationResponse {
      code: String!
      success: Boolean!
      message: String!
      woof: Woof
   }
   type Mutation {
      createUser(input: CreateUserInput): UserResponse!
      updateUser(input: UpdateUserInput): UserResponse!
      deleteUser(id: ID!): UserResponse!
      followUser(followerId: ID!, followingId: ID!): UserResponse!
      createWoof(input: CreateWoofInput): WoofResponse!
      deleteWoof(id: ID!): WoofResponse!
      likeWoof(woofId: ID!, userId: ID!): WoofResponse!
      replyWoof(input: ReplyWoofInput): WoofResponse!
   }
`
module.exports = typeDef
