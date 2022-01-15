// require packages ____________________________________
const express = require('express');
const router = express.Router();
const Service = require('../models/serviceModel');

const authMiddleware = require('../middleware/authMiddleware');
const { addService, getAllServices, deleteServiceById, updateServiceById } = require( '../controllers/serviceController' );


router.post('/add',authMiddleware,addService);
// GET services router without authentication (for all users)
router.get('/', getAllServices);

// UPDATE service router (only superUser) _____________________________________
router.put('/:serviceId', authMiddleware, updateServiceById);
// DELETE service router (only superUser) _____________________________________
router.delete('/:serviceId', authMiddleware, deleteServiceById);

module.exports = router;
