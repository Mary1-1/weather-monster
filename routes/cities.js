const express = require("express")
const router = express.Router()

const cityCtrl = require('../controllers/cities')


router.get("/city", cityCtrl.getAllCity)

router.post("/city", cityCtrl.createCity)

router.put("/city/:id", cityCtrl.updateCity);

router.delete("/city/:id", cityCtrl.deleteCity)

module.exports = router