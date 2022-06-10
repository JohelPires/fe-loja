import express from 'express'
import expressAsyncHandler from 'express-async-handler'
const router = express.Router()
import Produto from '../models/produtoModel.js'

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const produtos = await Produto.find({})
    // throw new Error('some error')
    res.json(produtos)
  })
)
router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const produto = await Produto.findById(req.params.id)

    if (produto) {
      res.json(produto)
    } else {
      res.status(404).json({ message: 'Produto não encontrado' })
    }
  })
)

export default router
