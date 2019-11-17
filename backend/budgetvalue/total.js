const mongoose = require('mongoose');

const schema = mongoose.Schema({
  total: {type: Number, default: 0},
  _id: {type: Number, default: 1}
});

module.exports = mongoose.model('Total', schema);
