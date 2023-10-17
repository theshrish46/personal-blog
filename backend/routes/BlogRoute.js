const express = require("express");
const router = express.Router();

const { write } = require("./../controllers/BlogController");

router.post("/write", write);

module.exports = router;
