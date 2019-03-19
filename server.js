const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { useNewUrlParser: true }
)
requireDir('./src/models')

const app = express()

const Product = mongoose.model('Product')

app.get('/', (req, res) => {

    Product.create({
        title: 'React native',
        description: 'Build native apps with react native',
        url: 'http://githubcom/facebook/react-native'
    })


    res.send('Verônica foi dormir!')
})

app.listen(8280)