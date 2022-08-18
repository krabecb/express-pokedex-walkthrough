const express = require('express')
const router = express.Router()

const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    res.render('pokemon_index.ejs', {allPokemon: pokemon})
})

module.exports = router