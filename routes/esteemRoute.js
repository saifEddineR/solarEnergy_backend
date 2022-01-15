const express = require('express');
const router = express.Router();
const multer = require('multer');
const Esteem = require('../models/EsteemModel');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client-imgs');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

// client estem service ______________________________________________________
router.post('/', upload.array('photos', 10), (req, res) => {
  let filesList = req.files.map(
    (file) =>
      (path = `${req.protocol}://${req.hostname}:5000/client-imgs/${file.filename}`)
  );

  let myBody = JSON.parse(req.body.userInput);
  console.log(myBody);
  let newEsteem = new Esteem({ ...myBody, roofImg: filesList });
  newEsteem
    .save()
    .then((esteem) => {
      res.status(201).send(esteem);
    })
    .catch((err) => {
      res.status(500).send({ msg: 'server error' });
    });
});

router.get('/', (req, res) => {
  Esteem.find()
    .then((esteem) => res.send(esteem))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});
module.exports = router;
