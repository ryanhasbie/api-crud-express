const express = require('express')
const bodyParser = require('body-parser')
const response = require('./response')
const db = require('./connection')
const app = express()
const port = 3000



app.use(bodyParser.json())

app.get('/', (req, res) => {
  response(200, 'API Ready!', 'Success!', res)
})

app.get('/users', (req, res) => {
  const query = "SELECT * FROM users"
  db.query(query, (errors, results) => {
    if (errors) throw errors
    response(200, results, 'Get all users data', res)
  })
})

app.get('/users/show/:id', (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM users WHERE id = ${id}`
  db.query(query, (error, result) => {
    if (error) throw error
    response(200, result, 'Show users data', res)
  })
})

app.post('/users/post', (req, res) => {
  console.log(req.body)
  res.send('Post Success!')
})
app.put('', (req, res) => {})
app.delete('', (req, res) => {})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})