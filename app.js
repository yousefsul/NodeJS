// import express and dotenv 
const express = require("express")
const dotenv = require("dotenv")
// import database connection from config db.ts
const connectDB = require('./config/db')

// load config file 
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

const PORT = process.env.PORT || 8000 

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))