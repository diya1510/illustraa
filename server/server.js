// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoutes.js'


// const PORT = process.env.port || 4000
// const app = express()

// app.use(express.json())
// app.use(cors())
// await connectDB()

// app.use('/api/user', userRouter)
// app.use('/api/image', imageRouter)
// app.get('/', (req,res)=> res.send("API WORKING fine"))

// app.listen(PORT, ()=> console.log("Server running on port " + PORT));


import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'
import serverless from 'serverless-http'

const app = express()

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send("API WORKING fine"))

// Instead of app.listen()
export const handler = serverless(app)
