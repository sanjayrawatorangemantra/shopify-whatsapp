const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 

const ProductSchema = new Schema({
    // name: { type: String, default: 'hahaha' },
    // age: { type: Number, min: 18, index: true },
    // bio: { type: String, match: /[a-z]/ },
    // date: { type: Date, default: Date.now },
    // buff: Buffer
  },{strict:false});

  const Product = mongoose.model('Product', ProductSchema);

  module.exports = Product;