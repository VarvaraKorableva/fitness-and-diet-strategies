import express from "express";
//const { auth } = require("../middlewares/utils.js");
const meals_routes = express.Router();
import {
    addMeal,
    getAllUserMeals,
    deleteMeal,
} from "../controllers/meals.controllers.js";
  
meals_routes.get('/:id', getAllUserMeals)
meals_routes.post('/', addMeal)
meals_routes.delete('/', deleteMeal)

export { meals_routes }