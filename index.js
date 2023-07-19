require('dotenv').config()
const cors = require('cors')
const express = require('express')
const {mongoose, connectDB} = require('./db')
const {config} = require('./db/google')
const router = require('./api/routes')
const api = express()

const start = async () => {
  try {
    api
      .use(cors())
      .use(express.json())
      .use('/api', router)
      .listen(process.env.PORT || 5000)
      await connectDB()
  } catch (err) {
    
  }
}

start()