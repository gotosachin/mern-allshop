import express from 'express'

import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

const router = express.Router()

// @desc Get all product
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc Get product by id
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error(`Product not found with id #${req.params.id}`)
    }
  })
)

export default router
