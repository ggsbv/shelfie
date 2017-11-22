"use strict";

const mongoose = require("mongoose");

module.exports = function(mongoUrl){
  mongoose.connect(mongoUrl);

  var db = mongoose.connection;

  db.on("error", function(err){
    console.error(err);
  });

  db.once("open", function(){
    console.log("connection successful");
  });

  const Schema = mongoose.Schema;

  const BookSchema = new Schema({
    bookId: String,
    title: String,
    description: String,
    image: String,
    inStock: Number
  });

  const Book = mongoose.model("Book", BookSchema);

  return {
    Book
  };
};
