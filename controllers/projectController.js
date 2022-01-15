const cloudinary = require('../helpers/cloudinary');
const Project = require('../models/projectModel');


// @desc create a new project
// @route POST /api/project/add
// @access PRIVATE-admin
const addProject = async(req, res) => {
  try {
    const newBody = JSON.parse(req.body.info);
    const imageInfo = await cloudinary.uploader.upload(req.file.path);
    const newProject = await Project.create({
      title: newBody.title,
      desc: newBody.desc,
      imgUpload: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
    });
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error });
  }
} 

// @desc get a list of all the projects
// @route GET /api/project/
// @access PUBLIC
const getProjects = async(req, res) => {
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch (error) {
    res.status(500).send({ msg: 'server error' });
  }
}

// @desc update a project by id
// @route PUT /api/project/:projectId
// @access PRIVATE-admin
const updateProjectById = async(req, res) => {
  try {
    const projectId = req.params.projectId;
    const updatedProject = await Project.findByIdAndUpdate(projectId, { ...req.body },{new:true})
    res.send({ msg: 'project updated', updatedProject });
    
  } catch (error) {
    res.status(400).send({ msg: 'ERROR UPDATING PROJECT' })
  }
}
// @desc update a project's image by id
// @route PUT /api/project/img/:projectId
// @access PRIVATE-admin
const updateProjectImg = async(req, res) => {
  try {
    const projectId = req.params.projectId;
    const imageInfo = await cloudinary.uploader.upload(req.file.path);
    const updatedProject = await Project.findByIdAndUpdate(projectId, { imgUpload: { imageURL: imageInfo.url, public_id: imageInfo.public_id } },{new:true})
    res.send({ msg: 'project updated', updatedProject });
    
  } catch (error) {
    res.status(400).send({ msg: 'ERROR UPDATING PROJECT' })
  }
}

// @desc delete a project by id
// @route DELETE /api/project/:projectId
// @access PRIVATE-admin
const deleteProjectById = async(req, res) => {
  try {
    const projectId = req.params.projectId;
    const deletedProject = await Project.findByIdAndDelete(projectId)
    res.json({ msg: `project deleted :${deletedProject.title}` });
  } catch (error) {
    res.status(400).send({ msg: 'ERROR UPDATING PROJECT' })
  }
}

module.exports = {addProject,getProjects,updateProjectById,deleteProjectById,updateProjectImg}