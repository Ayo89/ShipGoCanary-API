const router = require("express").Router();
const { checkAuth } = require("../middlewares/auth");
const userRouter = require('./user.route')
const shipmentRouter = require("./shipment.router");
const authRouter = require('./auth.route');


router.use("/users", checkAuth, userRouter);
router.use("/shipments", checkAuth, shipmentRouter);
router.use("/auth", authRouter);


module.exports = router;
