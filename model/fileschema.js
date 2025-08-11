const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  email: {
    type: String,
  },
});

const file = mongoose.model("File", fileSchema);
module.exports = file;
