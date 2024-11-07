const { mongoose } = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    installationDeadline: { type: Date, required: true },
    orderDate: { type: Date, required: true },
    type: { type: String, required: true },
    phone1: { type: String, required: true },
    phone2: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;