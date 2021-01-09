// import express 
const express = require('express')
const router = express.Router()

// Login Page Landing through get method 
router.get('/' , (req , res) =>{
    res.render('login')
})

// Dashboard Page Landing through get method 
router.get('/dashboard' , (req , res) =>{
    res.render('dashboard')
})


module.exports = router 