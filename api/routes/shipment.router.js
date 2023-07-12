const router = require("express").Router();
const { checkAdmin } = require("../middlewares/auth");
const {
  getAllShipmentsByUserLogged,
  UserUpdateShipment,
  getOneShipment,
  userAddShipment,
  userDeleteShipment
} = require("../controllers/shipment.controller");

router.get("/", getAllShipmentsByUserLogged);
router.get("/:id", getOneShipment);
router.post("/", userAddShipment);
router.put("/:id", UserUpdateShipment);
router.delete("/:id", userDeleteShipment);

module.exports = router;
