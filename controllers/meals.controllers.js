import {
    _getAllUserMeals,
    _deleteMeal,
    _addMeal,
} from "../models/meals.models.js"

export const addMeal = (req, res) => {
    const { product_name, calories, grams, user_id } = req.body;
    _addMeal(product_name, calories, grams, user_id)
      .then((data) => {
        res.json({ msg: "Successfully added" });
      })
      .catch((err) => {
        res.status(404).json({ msg: "Error, meal not added, try again" });
      });
};

export const getAllUserMeals = (req, res) => {
    const { user_id } = req.body
    console.log('Received id:', user_id);
    _getAllUserMeals(user_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json({ msg: "Not Found" });
      });
};

export const deleteMeal = (req, res) => {
    const { meal_id } = req.body
    console.log('Received id:', meal_id)
    _deleteMeal(meal_id)
      .then((data) => {
        res.json(data).json({ msg: "Deleted" })
      })
      .catch((err) => {
        res.status(404).json({ msg: "Not Found" });
      });
};
