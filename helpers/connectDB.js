const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = () => {
  console.log(`${process.env.MONGODB_USERNAME}:${process.env.MONGODB_SECRET}@`);
  mongoose
    .connect(
      `mongodb://mongo-deploy.default.svc.cluster.local:27017/solarEnergy?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
