const express = require('express');
const usersRoute = require('./routes/users/users')
const accountsRoute = require('./routes/accounts/accounts')
const transactionsRoute = require('./routes/transactions/transactions')
const app = express();

//middleware

//routes

//users routes
app.use('/api/v1/users', usersRoute);

//account routes
app.use('/api/v1/accounts', accountsRoute);

//transaction routes
app.use("/api/v1/transactions", transactionsRoute);

//error handling

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`))