const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use('/img-uploads', express.static(path.join(__dirname , '../' , '/img-uploads')));
app.use('/client-imgs', express.static(path.join(__dirname , '../' , '/client-imgs')));
// setting up dotenv
require('dotenv').config();
// mongoose setup
const connectDB = require('./helpers/connectDB');
connectDB();
// cors setup
const cors = require('cors');
app.use(cors());
//routes
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/project', require('./routes/projectRoute'));
app.use('/api/product', require('./routes/productRoute'));
app.use('/api/service', require('./routes/serviceRoute'));
app.use('/api/esteem', require('./routes/esteemRoute'));
// creating server on port 5000
app.listen(process.env.PORT || 5000, console.log('connected on port ', process.env.PORT));
