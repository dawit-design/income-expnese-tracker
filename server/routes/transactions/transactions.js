const express = require('express');
const {createTransactionsCtrl, singleTransactionsCtrl, deleteTransactionsCtrl, updateTransactionsCtrl} = require("../../controllers/transactions/transactionsCtrl")
const transactionsRoute = express.Router()

//POST/api/v1/transactions
transactionsRoute.post('/', createTransactionsCtrl)
//GET/api/v1/transactions/:id
transactionsRoute.get('/:id', singleTransactionsCtrl)

//DELETE/api/v1/transactions/:id
transactionsRoute.delete('/:id', deleteTransactionsCtrl)
//PUT/api/v1/transactions/:id
transactionsRoute.put('/:id', updateTransactionsCtrl)

module.exports = transactionsRoute