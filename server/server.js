import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import {getAll, create} from './db/MessageModel.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan("tiny"))

app.get('/', (req, res) => {
    res.json({
        message: "Hai welcom vue full stack"
    })
})

app.get('/messages', (req, res) => {
    getAll().then(message => {
        res.json(message) 
    })
})

app.post('/message', (req, res) => {
    create(req.body).then((message) => {
        res.json(message)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Server connected")
})