import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send({ status: 'hello there' })
})

app.listen(3000, () => {
  console.log('server nayla')
})