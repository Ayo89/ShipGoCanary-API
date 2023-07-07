const router = require("express").Router();
const { checkAdmin } = require("../middlewares/auth");
const {
  createUser,
  getAllUsers,
  updateUser,
  getOneUser,
  deleteUser,
  selfDelete,
  selfUpdate,
  getUserLogged,
} = require("../controllers/user.controller");

router.get("/",  getAllUsers);
router.get("/profile", getUserLogged);
router.get("/:id", getOneUser);
router.post("/", checkAdmin, createUser);
router.put("/:id", updateUser);
router.put("/profile/:id", selfUpdate);
router.delete("/:id", deleteUser);
router.delete("/profile", selfDelete);
module.exports = router;
