import dns from "node:dns";

dns.setServers(["1.1.1.1"]);

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ status: 'hello there' })
})

app.listen(3000, () => {
  console.log('server nyala')
})