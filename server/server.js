const express = require('express');
const usersRoute = require('./routes/users/users')
const accountsRoute = require('./routes/accounts/accounts')
const app = express();

//middleware

//routes

//users routes
app.use('/api/v1/users', usersRoute);

//account routes
app.use('/api/v1/accounts', accountsRoute);





//transaction routes
//POST/api/v1/transactions
app.post('/api/v1/transactions', async (req, res) => {
    try{
        res.json({msg: 'Create transactions route'})
    }catch(error){
        res.json(error)
    }
})
//GET/api/v1/transactions/:id
app.get('/api/v1/transactions/:id', async (req, res) => {
    try{
        res.json({msg: 'Get A single transactions route'})
    }catch(error){
        res.json(error)
    }
})

//DELETE/api/v1/transactions/:id
app.delete('/api/v1/transactions/:id', async (req, res) => {
    try{
        res.json({msg: 'Delete transactions route'})
    }catch(error){
        res.json(error)
    }
})
//PUT/api/v1/transactions/:id
app.put('/api/v1/transactions/:id', async (req, res) => {
    try{
        res.json({msg: 'Update transactions route'})
    }catch(error){
        res.json(error)
    }
})
//error handling

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`))