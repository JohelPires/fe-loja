import mongoose from "mongoose";
import dotenv from 'dotenv'
import users from './data/users.js'
import produtos from "./data/produtos.js";
import User from './models/userModel.js'
import Produto from './models/produtoModel.js'
import Order from './models/orderModel.js'
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

async function importData(){
    try {
        await Order.deleteMany()
        await Produto.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProdutos = produtos.map(produto => {
            return { ...produto, user: adminUser }
        })

        await Produto.insertMany(sampleProdutos)
        console.log('Data Imported!')
        process.exit()

    } catch (error) {
        console.log('Error: ', error)
        process.exit(1)
    }
}

async function destroyData(){
    try {
        await Order.deleteMany()
        await Produto.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()

    } catch (error) {
        console.log('Error: ', error)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}