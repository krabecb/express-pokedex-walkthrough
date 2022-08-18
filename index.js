//REQUIREMENTS
const express = require('express')

//CONFIGURATIONS
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

//MIDDLEWARE
//Necessary for POST and PUT routes when using req.body
//Incoming request object recognized as JSON object
app.use(express.json())
//Recognize incoming request object as strings or arrays
app.use(express.urlencoded({ extended: false }))

//CONTROLLERS

//GENERIC ROUTES

//SERVER LISTEN
app.listen(PORT, () => {
    const d = new Date()
    console.log(`${d.toLocaleString()}: Server is running on port: ${PORT}`)
})