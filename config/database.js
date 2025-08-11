const mongoose = require("mongoose");

const FileSchema = require("../model/fileschema");
require("dotenv").config();

exports.dbconnect = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      userUnifiedTopology: true,
    })
    .then(console.log("Database connected Successfully"))
    .catch((error) => {
      console.log(error);
      console.log("Database connection issues");
      process.exit(1);

    });
};
