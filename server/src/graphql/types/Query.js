const { gql } = require('apollo-server-express')

const typeDef = gql`
   type Query {
      woofs: [Woof]!
   }
`
module.exports = typeDef
