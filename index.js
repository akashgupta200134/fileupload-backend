const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const {dbconnect } = require("./config/database");
dbconnect();

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryconnect();



const uploadRoutes = require("./routes/fileuploadrouter");
app.use("/api/v1/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log("server started at Port", PORT);
});
