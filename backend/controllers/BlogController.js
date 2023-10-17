const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const write = async (req, res) => {
  const { title, content, image } = req.body;
  console.log(image)
  console.log(req.files)
  console.log(req.body);
  console.log(title);
  console.log(content);
  res.status(201).json({ title, content });
};

module.exports = { write };
