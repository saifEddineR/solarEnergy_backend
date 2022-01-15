// require packages ___________________________________________________
const express = require('express');
const router = express.Router();

const Project = require('../models/projectModel');
const authMiddleware = require('../middleware/authMiddleware');
// controllers __________________________________________________________
const { addProject, getProjects, updateProjectById, deleteProjectById, updateProjectImg } = require( '../controllers/projectController' );
// multer/cloudinary storage ______________________________________________
const multer = require('multer');
const cloudinary = require('../helpers/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'DEV',
  },
});
const upload = multer({ storage });
// POST a new project router (only superUser) ____________________________________________
router.post('/add', authMiddleware,upload.single('project'), addProject);
// update a project's image
router.put('/img/:projectId',authMiddleware,upload.single('project'),updateProjectImg)
// GET projects router without authentication (for all users)
router.get('/', getProjects);

// UPDATE project router (only superUser) _____________________________________
router.put('/:projectId', authMiddleware, updateProjectById);
// DELETE service router (only superUser) _____________________________________
router.delete('/:projectId', authMiddleware, deleteProjectById);

module.exports = router;
