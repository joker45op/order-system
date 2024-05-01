const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const orderSchema = new Schema({
  takeaway: {
    type: Boolean,
    required: true
  },
  tableName: {
    type: Number,
    default: null
  },
  items: [itemSchema], // Array of items, each item is an embedded document
  status: {
    type: Boolean,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  orderTotal: {
    type: Number,
    default: 0
  },
  gstAmount: {
    type: Number,
    default: 0
  },
  grandTotal: {
    type: Number,
    default: 0
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;