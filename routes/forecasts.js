const express = require("express")
const router = express.Router()

const forecastCtrl = require('../controllers/forecasts')

router.post("/forecast", forecastCtrl.foreCasts)

module.exports = router