import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import {
  _createUser,
  _getAllUsers,
  _getUserByEmail,

} from "../models/users.models.js"

export const createUser = (req, res) => {
    const { name, email, password, weight, height, gender, age } = req.body;
    _createUser(name, email, password, weight, height, gender, age)
      .then((data) => {
        res.json({ msg: "Successfully registered" });
      })
      .catch((err) => {
        res.status(404).json({ msg: "Error, you are not registered, try again" });
      });
};

export const getAllUsers = (req, res) => {
    _getAllUsers()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json({ msg: "Not Found" });
      });
};

export const getUser = async (req, res) => {
    const { email } = req.body
    try {
      const data = await _getUserByEmail(email);
      if (data.length === 0) {
        return res.status(404).json({ msg: "User not found" })
      } else {
        res.status(200).json({msg: 'Successful registration'})
      }
    } catch (error) {
      return res.status(404).json({ msg: "User not found" });
    }
}; 

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
      const user = await _getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "User not found" })
      }
      
      if (!password || !user.password) {
        return res.status(400).json({ error: "Password is not correct" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Password or email is not correct" })
      } else {
        const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' })
        res.status(200).json({ token, user})
      }
    } catch (error) {
      throw error;
    }
  };
