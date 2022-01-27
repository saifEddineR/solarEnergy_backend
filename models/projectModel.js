const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  // owner: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'user',
  // },
  title: String,
  desc: String,
  imgUpload: {
    imageURL: String,
    public_id: String,
  },
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('project', ProjectSchema);
