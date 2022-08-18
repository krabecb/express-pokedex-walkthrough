const express = require('express')
const router = express.Router()

const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
    pokemon.forEach(singlePokemon => {
        console.log(singlePokemon.name)
    })
})

module.exports = router