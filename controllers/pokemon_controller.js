const express = require('express')
const router = express.Router()

const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    res.render('pokemon_index.ejs', {allPokemon: pokemon})
})

router.get('/new', (req, res) => {
    res.render('pokemon_new.ejs')
})

router.post('/', (req, res) => {
    const createdPokemon = req.body
    pokemon.push(createdPokemon)
    res.redirect('/pokemon')
})

router.get('/:id', (req, res) => {
    res.render('pokemon_show.ejs', {pokemon: pokemon[req.params.id]})
})

module.exports = router