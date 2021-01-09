export{}
// import express 
const express = require('express')
const router = express.Router()
const passport = require('passport')

// Auth With Google Landing through get method /auth/google 
router.get('/google' , passport.authenticate('google' , { scope: ['profile'] }))

// Google Auth Callback Landing through get method /auth/google/callback 
router.get('/google/callback' , passport.authenticate('google' , { failureRedirect: '/'}), (req,res) => {
    res.redirect('/dashboard')
})

// logout user  /auth/logout 
router.get('/logout' , (req,res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router 

