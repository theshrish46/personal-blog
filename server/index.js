const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Importing Routers
// const userAuth = require('./routes/userAuth');

// Middlewears
app.use(express.json());
app.use(cors());

// app.use('/login', userAuth);
// app.use('/login-page', loginpage);

app.post('/register', async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName);
  res.json({ name: userName, pass: password });
});

app.put('/login', async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  res.json({ name: userName, password: password });
});

app.listen(8000, () => {
  console.log(`Server started at 8000`);
});
