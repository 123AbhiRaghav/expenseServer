const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  paymentMethod: { type: String, required: true,enum: ["Cash", "Credit Card", "Bank Transfer"], },
  receipt:{type:String}
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);
