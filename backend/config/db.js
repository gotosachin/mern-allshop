import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB connected on: ${conn.connection.host}`)
  } catch (error) {
    console.error(`DB Error: ${error.message}`)
    // console.log('Connection failed!!' + error.message)
    process.exit(1)
  }
}

export default connectDB
