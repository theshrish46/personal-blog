const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");

const UserRoute = require("./routes/UserRoute");
const BlogRoute = require("./routes/BlogRoute");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Users/shrish kerur/Desktop/personal-blog/backend/uploads");
  },
  filename: (req, file, cb) => {
    // const fileSuffix = Date.now();
    // cb(null, file.fieldname + "-" + fileSuffix);
    const imageType = file.originalname.split(".");
    console.log(imageType);
    cb(null, `${Date.now()}.${imageType[1]}`);
  },
});

const upload = multer({ storage: storage });

try {
  mongoose.connect(process.env.MONGO_URL, {});
  console.log("CONNECTED TO DATABASE SUCCESSFULLY");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use("/auth", UserRoute);
app.use("/blog", upload.single("image"), BlogRoute);

app.listen(process.env.PORT, () => {
  console.log(`PORT RUNNING SUCCESSFULLY AT ${process.env.PORT}`);
});
