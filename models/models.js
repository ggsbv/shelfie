const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create shoes Schema;
const BookSchema = new Schema({
    bookId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true }
  });

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
