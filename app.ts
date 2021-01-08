// import express , dotenv , morgan , express-handlebars
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exp_hbrs = require("express-handlebars")

// import database connection from config db.ts
const connectDB = require('./config/db')

// load config file 
dotenv.config({path: './config/config.env'})

// use function connectDB from config file db.ts 
connectDB()

const app = express()

// Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// HandleBars
app.engine('.hbs' , exp_hbrs({defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine' , '.hbs')



// run server on port 8000 
const PORT = process.env.PORT || 8000 
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))