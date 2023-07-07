const router = require("express").Router();
const { signup, login, saluda } = require("../controllers/auth.controller");

router.post("/signup", signup);
router.post("/login", login);
router.get("/", saluda)

module.exports = router;
