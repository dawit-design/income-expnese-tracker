const express = require("express");
const {registerUserCtrl, loginUserCtrl, profileUserCtrl, deleteUserCtrl, updateUserCtrl} = require("../../controllers/users/usersCtrl")
const usersRoute = express.Router()

////POST/api/v1/users/register
usersRoute.post("/register", registerUserCtrl)
//POST/api/v1/users/login
usersRoute.post("/login", loginUserCtrl)
//GET/api/v1/users/profile/:id
usersRoute.get("/profile/:id",  profileUserCtrl)
//DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserCtrl)
//PUT/api/v1/users/:id
usersRoute.put("/:id", updateUserCtrl)

module.exports = usersRoute