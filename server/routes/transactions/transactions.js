const express = require('express');

const transactionsRoute = express.Router()

//POST/api/v1/transactions
transactionsRoute.post('/', async (req, res) => {
    try{
        res.json({msg: 'Create transactions route'})
    }catch(error){
        res.json(error)
    }
})
//GET/api/v1/transactions/:id
transactionsRoute.get('/:id', async (req, res) => {
    try{
        res.json({msg: 'Get A single transactions route'})
    }catch(error){
        res.json(error)
    }
})

//DELETE/api/v1/transactions/:id
transactionsRoute.delete('/:id', async (req, res) => {
    try{
        res.json({msg: 'Delete transactions route'})
    }catch(error){
        res.json(error)
    }
})
//PUT/api/v1/transactions/:id
transactionsRoute.put('/:id', async (req, res) => {
    try{
        res.json({msg: 'Update transactions route'})
    }catch(error){
        res.json(error)
    }
})

module.exports = transactionsRoute