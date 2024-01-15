const { db } = require("../config/db.js")
const bcrypt = require('bcrypt')
/*
const _createUser = async (name, email, password, weight, height, gender, age) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return db("users")
    .insert({ name, email, password: hashedPassword, weight, height, gender, age }).returning("*");
};*/

const _createUser = async (name, email, password, weight, height, gender, age) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await db("users").insert({
        name,
        email,
        password: hashedPassword,
        weight,
        height,
        gender,
        age
      }).returning("*");
  
      return result[0];
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  };

const _getAllUsers = () => {
    return db("users").select("*").orderBy("id");
};
/*
const _getUser = (id) => {
    return db("users")
    .select("*")
    .where({ id })
    .returning("*")
    .catch((error) => {
      throw new Error(`Error fetching post with id ${id}: ${error.message}`)
    })
};*/

const _getUserByEmail = (email) => {
    return db("users").select("*").where({ email }).first()
 };

module.exports = {
  _createUser, 
  _getAllUsers,
  //_getUser,
  _getUserByEmail
};
