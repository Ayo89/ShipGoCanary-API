const router = require("express").Router();
const { checkAuth } = require("../middlewares/auth");
const userRouter = require('./user.route')
const shipmentRouter = require("./shipment.router");
const categoryRouter = require("./category.route");
const authRouter = require('./auth.route');


router.use("/users", checkAuth, userRouter);
router.use("/shipments", checkAuth, shipmentRouter);
router.use("/categories", checkAuth, categoryRouter);

router.use("/auth", authRouter);


module.exports = router;
