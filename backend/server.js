import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('server running')
})

app.use('/api/products', productRoutes)

// Middleware for notFound and any error handler
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on ${PORT} port!!`
  )
)
