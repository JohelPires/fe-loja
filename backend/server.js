const express = require('express')
const produtos = require('./data/produtos')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})
app.get('/api/produtos', (req, res) => {
  res.json(produtos)
})
app.get('/api/produtos/:id', (req, res) => {
  const produto = produtos.find((p) => p._id === req.params.id)
  res.json(produto)
})

app.listen(5000, console.log('Servidor rodando na porta 5000'))
