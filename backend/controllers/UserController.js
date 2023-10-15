const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./../models/User");
const { json } = require("express");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userDoc = await User.create({
      username: name,
      useremail: email,
      password: hashedPassword,
    });
    userDoc.password = "";
    const token = jwt.sign(
      {
        token: userDoc._id,
        username: userDoc.username,
        useremail: userDoc.useremail,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("All the fields are important");
  }
  try {
    const user = await User.findOne({ useremail: email });
    if (!user) {
      res.send("User Doesnot exist");
    }
    const hashPassword = await bcrypt.compare(password, user.password);
    if (!hashPassword) {
      res.send("Invalid Password");
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        useremail: user.useremail,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(200).send(token);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
