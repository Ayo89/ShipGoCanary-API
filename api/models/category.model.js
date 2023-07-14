const mongoose = require("mongoose");

const category = new mongoose.Schema({
  name: {
    type: String
  },
  img: {
    type: String
  }
})
 

const Category = mongoose.model("Category", category);

module.exports = Category;
