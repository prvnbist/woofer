const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')

const KEYS = require('./configs/keys')
const schema = require('./graphql')

const PORT = process.env.PORT || 4001
const app = express()

mongoose.connect(
   KEYS.MONGO.DB_URI,
   {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useFindAndModify: false
   },
   error => {
      if (error) console.log(`Error connecting to DB: ${error.message}`)
      console.log('Connected to DB')
   }
)

const server = new ApolloServer({ schema, debug: false })

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: PORT }, () =>
   console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
   )
)
