//REQUIREMENTS
const express = require('express')

//CONFIGURATIONS
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

//MIDDLEWARE
app.use(express.static('public'))
//Necessary for POST and PUT routes when using req.body
//Incoming request object recognized as JSON object
app.use(express.json())
//Recognize incoming request object as strings or arrays
app.use(express.urlencoded({ extended: false }))

//CONTROLLERS
const pokemonController = require('./controllers/pokemon_controller')
app.use('/pokemon', pokemonController)

//GENERIC ROUTES

app.get('/', (req, res) => {
    res.render('index.ejs')
})

//SERVER LISTEN
app.listen(PORT, () => {
    const d = new Date()
    console.log(`${d.toLocaleString()}: Server is running on port: ${PORT}`)
})