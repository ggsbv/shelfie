const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create shoes Schema;
const ShoeSchema = new Schema({
    brand: { type: String, required: true},
    color: { type: String, required: true},
    price: { type: Number, required: true},
    size:  { type: Number, required: true},
    in_stock: { type: Number, required: true}

  });



const Shoes = mongoose.model('shoes', ShoeSchema);

module.exports = Shoes;
