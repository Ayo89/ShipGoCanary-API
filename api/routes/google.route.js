const router = require("express").Router();

const { getAllPlaces } = require('../controllers/google.controller')

router.get('/', getAllPlaces)

module.exports = router;
