const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 10,
  },
  price: {
    type: Number,
    default: 0.00,
  },
  coverImg: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
