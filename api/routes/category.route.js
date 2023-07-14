const router = require("express").Router();
const {
  createCategory,
  getAllCategory,
  deleteCategory,
} = require("../controllers/category.controller");

router.get("/", getAllCategory);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
module.exports = router;
