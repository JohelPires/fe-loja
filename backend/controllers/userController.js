import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      nome: user.nome,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('E-mail ou senha inválidos')
  }
})

// @desc    get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = async (req, res) => {
  res.send('Success')
  // const user = await User.findById(req.user._id)
  // try {
  //   res.send(user.nome)
  // } catch (error) {
  //   res.status(404)
  //   throw new Error('User not found' + error)
  // }

  //   if (user) {
  //     res.json({
  //       _id: user._id,
  //       nome: user.nome,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //     })
  //   } else {
  //     res.status(404)
  //     throw new Error('User not found')
  //   }
}

export { authUser, getUserProfile }
