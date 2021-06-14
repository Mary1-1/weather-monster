const express = require("express")
const router = express.Router()

const temperatureCtrl = require('../controllers/temperature')


router.post("/temperature", temperatureCtrl.appendTemperatures)


module.exports = router