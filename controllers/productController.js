const Product = require('../models/productModel');

// @desc create a new product
// @route POST /api/product/add
// @access PRIVATE-admin
const createProduct = async(req,res)=>{
  try {
    const newProduct = await Product.create({...req.body})
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ msg: `server error: ${error}` })
  }
}
// @desc get a list of all the products
// @route GET /api/product
// @access PUBLIC
const getProduct = async(req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ msg: `server error: ${error}` })
  }
}

// @desc update a product by id
// @route PUT /api/product/:producId
// @access PRIVATE-admin
const updateProduct = async(req, res) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = await Product.findByIdAndUpdate(productId, { ...req.body })
    res.json({ msg: 'product updated', updatedProduct })
  } catch (error) {
    res.status(500).json({ msg: `server error: ${error}` })
  }
}

// @desc delete a product by id
// @route DELETE /api/product/:productId
// @access PRIVATE-admin
const deleteProductById = async(req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ msg: 'product not found' });
      }
      res.send({ msg: `product deleted :${product.name}` });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING PRODUCT' }));
}

module.exports = {createProduct,getProduct,updateProduct,  deleteProductById}