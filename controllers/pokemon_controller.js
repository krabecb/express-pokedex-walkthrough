const express = require('express')
const router = express.Router()

const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    res.render('pokemon_index.ejs', {allPokemon: pokemon})
})

router.get('/new', (req, res) => {
    res.render('pokemon_new.ejs')
})

router.get('/:id/edit', (req, res) => {
    res.render('pokemon_edit.ejs', {pokemon: pokemon[req.params.id], id: req.params.id})
})

router.get('/:id', (req, res) => {
    res.render('pokemon_show.ejs', {pokemon: pokemon[req.params.id], id: req.params.id})
})

router.post('/', (req, res) => {
    const createdPokemon = req.body
    pokemon.push(createdPokemon)
    res.redirect('/pokemon')
})

router.put('/:id', (req, res) => {
    let pokemonToEdit = pokemon[req.params.id]
    pokemonToEdit.name = req.body.name
    pokemonToEdit.img = req.body.img
    res.redirect(`/pokemon/${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect('/pokemon')
})

module.exports = router