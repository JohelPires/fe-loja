// const express = require('express')
// const dotenv = require('dotenv')
// const produtos = require('./data/produtos')

import express from 'express'
import dotenv from 'dotenv'
//import produtos from './data/produtos.js'
import path from 'path'
import connectDB from './config/db.js'
import productRoutes from './Routes/productRoutes.js'
// import { application } from 'express'

const __dirname = path.resolve()

dotenv.config({ path: __dirname + '/../.env' })

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/produtos', productRoutes)

//====NOT FOUND=====
app.use((req, res, next) => {
  const error = new Error(`not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
})

//====ERROR HANDLER====
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Servidor rodando em modo ${process.env.NODE_ENV} na porta ${PORT}`
  )
)
