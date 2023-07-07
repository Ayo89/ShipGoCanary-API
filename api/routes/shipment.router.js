const router = require("express").Router();
const { checkAdmin } = require("../middlewares/auth");
const {
  createShipment,
  getAllShipments,
  updateShipment,
  getOneShipment,
  deleteShipment,
  selfDelete,
  selfUpdate,
  getShipmentLogged,
  userAddShipment,
} = require("../controllers/shipment.controller");

router.get("/", getAllShipments);
router.get("/profile", getShipmentLogged);
router.get("/:id", getOneShipment);
router.post("/", userAddShipment);
router.put("/:id", updateShipment);
router.put("/profile/:id", selfUpdate);
router.delete("/:id", deleteShipment);
router.delete("/profile", selfDelete);
module.exports = router;
