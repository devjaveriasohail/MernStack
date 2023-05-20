const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000
const connectDB = require('./config/db')
const {errorHandler}= require("./middleware/errorMiddlrware")

connectDB()
const app = express()

//using middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
// error handler
app.use(errorHandler)

app.listen(port,()=>console.log(`Server started at port ${port}`))