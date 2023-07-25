const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

app.post('/loginpage', (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ email: email, password: password });
});

app.post('/user-register', (req, res) => {
  const { userName, userEmail, password } = req.body;

  res
    .status(200)
    .json({ name: userName, email: userEmail, password: password });
});

app.listen(PORT);
