const express = require('express')
const router = express.Router()

const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    res.render('pokemon_index.ejs', {allPokemon: pokemon})
})

router.get('/:id', (req, res) => {
    res.render('pokemon_show.ejs', {pokemon: pokemon[req.params.id]})
})

module.exports = router