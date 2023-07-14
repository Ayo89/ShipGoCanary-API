const Category = require('../models/category.model')


async function getAllCategory(req, res) {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function createCategory(req, res) {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getOneCategory(req, res) {
  try {
    const shipment = await Shipment.findById(req.params.id);
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function deleteCategory(req, res) {
  try {
    const category = await Category.deleteOne({ _id: req.params.id });
    if (category) {
      return res.status(200).send("Category removed successfully");
    } else {
      return res.status(404).send("Category not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  createCategory,
  getAllCategory,
  getOneCategory,
  deleteCategory,
};

