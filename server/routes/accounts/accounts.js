const express = require('express');
const {createAccountCtrl, singleAccountCtrl, deleteAccountCtrl, updateAccountCtrl} = require("../../controllers/accounts/accountsCtrl")
const accountsRoute = express.Router()

//POST/api/v1/accounts
accountsRoute.post("/", createAccountCtrl)
//GET/api/v1/accounts/:id
accountsRoute.get("/:id", singleAccountCtrl)
//DELETE/api/v1/accounts/:id
accountsRoute.delete('/:id', deleteAccountCtrl)
//PUT/api/v1/accounts/:id
accountsRoute.put('/:id', updateAccountCtrl)
module.exports = accountsRoute