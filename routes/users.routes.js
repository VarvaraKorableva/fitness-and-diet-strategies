import express from "express";
const users_router = express.Router();
import {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
} from "../controllers/users.controllers.js";

users_router.post('/signup', createUser)
users_router.post('/signin', loginUser)
  
//users_router.get('/', getAllUsers)
//users_router.get('/me', getUser)

export { users_router };
