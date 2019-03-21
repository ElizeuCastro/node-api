const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
requireDir('./src/models')

mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
)

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', require('./src/routers/Routers'))
app.listen(8280)