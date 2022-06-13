import expressAsyncHandler from 'express-async-handler'
import Produto from '../models/produtoModel.js'

// @desc    Fetch all products
// @route   GET /api/produtos
// @access  Public

const getProducts = expressAsyncHandler(async (req, res) => {
  const produtos = await Produto.find({})

  res.json(produtos)
})

const getProductById = expressAsyncHandler(async (req, res) => {
  const produto = await Produto.findById(req.params.id)

  if (produto) {
    res.json(produto)
  } else {
    res.status(404).json({ message: 'Produto não encontrado' })
  }
})

export { getProducts, getProductById }
