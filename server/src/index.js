const express = require('express')
const mongoose = require('mongoose')

const KEYS = require('./configs/keys')

const PORT = process.env.PORT || 4000
const app = express()

mongoose.connect(
   KEYS.MONGO.DB_URI,
   {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
   },
   error => {
      if (error) console.log(`Error connecting to DB: ${error.message}`)
      console.log('Connected to DB')
   }
)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
