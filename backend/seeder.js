import mongoose from 'mongoose'

import dotenv from 'dotenv'

// Data class
import users from './data/users.js'

import products from './data/products.js'

// import orders from './data/order.js'

// Model class
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // Clear all data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // Insert seeder data
    const createdUsers = await User.insertMany(users)
    console.log(createdUsers)
    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    const createdProducts = await Product.insertMany(sampleProducts)
    console.log(createdProducts)
    console.log('Data imported successfully!!')
    process.exit()
  } catch (error) {
    console.error(`${errro}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Clear all data
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed successfully!!')
    process.exit()
  } catch (error) {
    console.error(`${errro}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
