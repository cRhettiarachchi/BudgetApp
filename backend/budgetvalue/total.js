const mongoose = require('mongoose');

const schema = mongoose.Schema({
  total: {type: Number, default: 0}
});

module.exports = mongoose.model('TotalModel', schema);
