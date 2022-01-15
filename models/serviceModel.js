const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  img: String,
  desc: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('service', serviceSchema);
