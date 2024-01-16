const express = require("express");
// const axios = require('axios');
const users_calc = express.Router();


users_calc.post("/details", (req, res) => {
    const { gender, weight, height, age } = req.body;
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return res.status(400).json({ error: "Wrong gender" });
    }
  
    const totalCalories = bmr * 1.2;
  
    res.json({ totalCalories });
  });


// axios.get()

// users_calc.get("/food", axios.get('https://api.api-ninjas.com/v1/nutrition?query=&X-Api-Key=S1qqU4se/app/0TyiTWsDw==PzMrGtkYUf4ryTn2')
// .then((response) => {
//   console.log('Response:', response.data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });)
  
  
  module.exports = {users_calc};

 