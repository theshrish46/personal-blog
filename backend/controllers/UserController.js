const { hash } = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./../models/User");
const { json } = require("express");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    const userDoc = await User.create({
      username: name,
      useremail: email,
      password: hashedPassword,
    });
    userDoc.password = "";
    const token = jwt.sign({ token: userDoc._id }, "asdf", { expiresIn: "1h" });

    res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
