const express = require('express');

const app = express();

//middleware

//routes

//users routes
//POST/api/v1/users/register
app.post('/api/v1/users/register', async (req, res) => {
    try{
        res.json({msg: 'Register route'})
    }catch(error){
        res.json(error)
    }
})
//POST/api/v1/users/login
app.post('/api/v1/users/login', async (req, res) => {
    try{
        res.json({msg: 'Login route'})
    }catch(error){
        res.json(error)
    }
})
//GET/api/v1/users/profile/:id
app.get('/api/v1/users/profile/:id', async (req, res) => {
    try{
        res.json({msg: 'Profile route'})
    }catch(error){
        res.json(error)
    }
})
//Delete/api/v1/users/:id
app.delete('/api/v1/users/:id', async (req, res) => {
    try{
        res.json({msg: 'Delete route'})
    }catch(error){
        res.json(error)
    }
})
//account routes
//transaction routes
//error handling

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and running on ${PORT}`))