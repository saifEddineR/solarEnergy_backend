const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// setting up dotenv
require('dotenv').config();
// mongoose setup
const connectDB = require('./helpers/connectDB');
connectDB();
// cors setup
const cors = require('cors');
app.use(cors());
// get images
app.use('/img-uploads', express.static(path.join(__dirname, '../', '/img-uploads')));
app.use('/client-imgs', express.static(path.join(__dirname, '../', '/client-imgs')));
//routes
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/project', require('./routes/projectRoute'));
app.use('/api/product', require('./routes/productRoute'));
app.use('/api/service', require('./routes/serviceRoute'));
app.use('/api/esteem', require('./routes/esteemRoute'));
// creating server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, console.log('connected on port ', port));
