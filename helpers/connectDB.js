const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = () => {
  let mongoUrlK8s = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.DB_URL}:27017/solarEnergy?authSource=admin`;
  mongoose
    .connect(mongoUrlK8s, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected to database'))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
