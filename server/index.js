const express = require('express');
const cors = require('cors');
const app = express();

// Importing Routers
const { userAgent } = require('next/server');
const userAuth = require('./routes/userAuth');
// const loginpage = require('./routes/loginpage');

// Middlewears
app.use(express.json());
app.use(cors());

app.use('/login', userAuth);
// app.use('/login-page', loginpage);

app.post('/loginpage', (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  res.send(200).json({ name: 'OK' });
});

app.listen(8000, () => {
  console.log(`Server started at 8000`);
});
