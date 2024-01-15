const express = require("express");
//const { auth } = require("../middlewares/utils.js");
const users_router = express.Router();
const {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
} = require("../controllers/users.controllers");

users_router.post('/signup', createUser)
users_router.post('/signin', loginUser)
  
users_router.get('/', getAllUsers)
users_router.get('/me', getUser)

module.exports = {
  users_router,
};
