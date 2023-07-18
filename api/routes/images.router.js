const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { getImages } = require("../controllers/image.controller");

router.post("/", upload.single("image"), getImages);

module.exports = router;
