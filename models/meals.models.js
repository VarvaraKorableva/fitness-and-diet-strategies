import { db } from "../config/db.js"

export const _addMeal = async (product_name, calories, grams, user_id) => {
    try {
      const result = await db("meals").insert({
        product_name, 
        calories, 
        grams,  
        user_id
      }).returning("*");
  
      return result[0];
    } catch (error) {
      throw new Error(`Error creating meal: ${error.message}`);
    }
  };

export const _getAllUserMeals = (user_id) => {
    return db("meals")
    .select("*")
    .orderBy("meal_id")
    .where({user_id})
};

export const _deleteMeal = (meal_id) => {
    return db("meals").del().where({ meal_id })
};