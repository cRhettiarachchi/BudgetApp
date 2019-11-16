const mongoose = require('mongoose');

const schema = mongoose.Schema({
  amount: {type: Number, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true}
});

module.exports = mongoose.model('BudgetValue', schema);
