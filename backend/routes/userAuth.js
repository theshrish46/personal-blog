const express = require('express');
const router = express.Router();

// To get the user details
router.get('/profile', (req, res) => {
  res.json({ message: 'ok userAuth' });
});

// Route to accept the user details and create a new account
router.post('/register', (req, res) => {
  res.status(200).json({ message: 'Register Route' });
});


