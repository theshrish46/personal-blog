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

app.listen(PORT);
