const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ name: 'ok' });
  console.log('started server');
});

router.post('/', (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  res.send(200).json({ name: 'Got the Data' });
});

module.exports = router;
