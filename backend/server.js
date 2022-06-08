// const express = require('express')
// const dotenv = require('dotenv')
// const produtos = require('./data/produtos')

import express from 'express'
import dotenv from 'dotenv'
import produtos from './data/produtos.js'
import path from 'path'
import connectDB from './config/db.js'

const __dirname = path.resolve();

dotenv.config({ path:__dirname+'/../.env' })

connectDB()

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


