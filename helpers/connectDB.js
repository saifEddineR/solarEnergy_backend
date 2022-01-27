const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = () => {
  mongoose
    .connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_SECRET}@mongodb:27017/solarEnergy?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
