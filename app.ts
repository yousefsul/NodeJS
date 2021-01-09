// import express , dotenv , morgan , express-handlebars , passport , express-session 
const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exp_hbrs = require("express-handlebars")
const passport = require("passport")
const session = require('express-session')

// import database connection from config db.ts
const connectDB = require('./config/db')

// load config file 
dotenv.config({path: './config/config.env'})

// Passport Config 
require('./config/passport')(passport)

// use function connectDB from config file db.ts 
connectDB()

const app = express()

// Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Static Pages
app.use(express.static(path.join(__dirname ,'public')))

// HandleBars
app.engine('.hbs' , exp_hbrs({defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine' , '.hbs')

/* 
session 
resave : don't save if nothing modified 
saveUninitialized set to false don't create session until something is stored 
 */
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false, 
  }))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// routes 
app.use('/' ,  require('./routes/index'))
app.use('/auth' ,  require('./routes/auth'))

// run server on port 8000 
const PORT = process.env.PORT || 8000 
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))