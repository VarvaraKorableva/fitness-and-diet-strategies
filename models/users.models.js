import { db } from "../config/db.js"
import bcrypt from 'bcrypt'

export const _createUser = async (name, email, password, weight, height, gender, age) => {
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

export const _getAllUsers = () => {
    return db("users").select("*").orderBy("id");
};

export const _getUserByEmail = (email) => {
    return db("users").select("*").where({ email }).first()
};

