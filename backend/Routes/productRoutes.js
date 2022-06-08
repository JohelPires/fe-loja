import express from 'express'
const router = express.Router()
import Produto from '../models/produtoModel.js'

router.get('/', (req, res) => {
  const produtos = Produto.find({})
  res.json(produtos)
})
router.get('/:id', (req, res) => {
  const produto = produtos.find((p) => p._id === req.params.id)
  res.json(produto)
})

export default router
