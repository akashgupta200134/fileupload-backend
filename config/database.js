const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  }
   catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

