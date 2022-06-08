const express = require('express')
const dotenv = require('dotenv')
const produtos = require('./data/produtos')

dotenv.config()

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT}`))
