const Service = require('../models/serviceModel');


// @desc add a new service
// @route POST /api/service/add
// @access PRIVATE/admin
const addService = async(req, res) => {
  try {
  let newService = await Service.create({...req.body});
  res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ msg: 'server error' });
  }
}

// @desc get a list of all services
// @route GET /api/service/
// @access PUBLIC
const getAllServices = async(req, res) => {
  try {
    const services = await Service.find()
    res.json(services)
  } catch (error) {
    res.status(500).send({ msg: 'server error' });
  }
}

// @desc update a service by id
// @route PUT /api/service/:serviceId
// @access PRIVATE/admin
const updateServiceById = async(req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const updatedService = await Service.findByIdAndUpdate(serviceId, { ...req.body },{new:true})
    res.send(updatedService);
  } catch (error) {
    res.status(400).send({ msg: 'ERROR UPDATING SERVICE' })
  }
}

// @desc delete a service by id
// @route DELETE /api/service/:serviceId
// @access PRIVATE/admin
const deleteServiceById = async(req, res) => {
  try {
    const serviceId = req.params.serviceId;
    const deletedService = await Service.findByIdAndDelete(serviceId)
    res.send({ msg: `service deleted :${deletedService.title}` });
    
  } catch (error) {
    res.status(400).send({ msg: 'ERROR UPDATING SERVICE' })
  }
}

module.exports = {addService,getAllServices,updateServiceById,deleteServiceById}