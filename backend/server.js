const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const { mongoose } = require('mongoose');
const UserModel = require('./models/UserModel');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/UserModel');
const multer = require('multer');
const uploadMiddleware = multer({ dest: './backend/uploads' });

dotenv.config();
const PORT = process.env.PORT || 8000;

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfghjklqwertyuiopzxcvbnm';

app.use(express.json({ limit: '200mb' }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.unlink('//uploads', express.static(__dirname + '/uploads'));

mongoose.connect(process.env.MONGO_URL).then((res) => console.log('Connected'));

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/user-register', async (req, res) => {
  const { userName, userEmail, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      name: userName,
      email: userEmail,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(201).json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/loginpage', async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await User.findOne({ name: userName });
  const passOk = bcrypt.compare(password, userDoc.password);

  if (passOk) {
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        userName,
      });
    });
  } else {
    res.json('wrong credentials');
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('logged out');
});

app.post('/createpost', uploadMiddleware.single('file'), (req, res) => {
  const { title, content, file, summary } = req.body;
  res.json({ title, summary, file: req.file, content });
});

app.listen(PORT);
