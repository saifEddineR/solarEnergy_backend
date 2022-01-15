const mongoose = require('mongoose');

const esteemSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phoneNumber: Number,
  addressCity: String,
  addressLocation: String,
  zipCode: Number,
  country: String,
  refSTEG: Number,
  annualElecConsum: Number,
  roofDimentionL: Number,
  roofDimentionW: Number,
  roofImg: Array,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('esteem', esteemSchema);
