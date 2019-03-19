const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  about: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
