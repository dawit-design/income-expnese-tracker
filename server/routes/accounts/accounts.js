const express = require('express');

const accountsRoute = express.Router()

//POST/api/v1/accounts
accountsRoute.post("/", async (req, res) => {
    try{
        res.json({msg: 'Create Account route'})
    }catch(error){
        res.json(error)
    }
})
//GET/api/v1/accounts/:id
accountsRoute.get("/:id", async (req, res) => {
    try{
        res.json({msg: 'Get A single account route'})
    }catch(error){
        res.json(error)
    }
})
//DELETE/api/v1/accounts/:id
accountsRoute.delete('/:id', async (req, res) => {
    try{
        res.json({msg: 'Delete account route'})
    }catch(error){
        res.json(error)
    }
})
//PUT/api/v1/accounts/:id
accountsRoute.put('/:id', async (req, res) => {
    try{
        res.json({msg: 'Update account route'})
    }catch(error){
        res.json(error)
    }
})
module.exports = accountsRoute