const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const router = require("./routes/UserRoute");


try {
  mongoose.connect(process.env.MONGO_URL, {});
  console.log("CONNECTED TO DATABASE SUCCESSFULLY");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use("/auth", router);

app.listen(process.env.PORT, () => {
  console.log(`PORT RUNNING SUCCESSFULLY AT ${process.env.PORT}`);
});
