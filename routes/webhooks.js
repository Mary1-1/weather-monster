const express = require("express")
const router = express.Router()

const webhooksCtrl = require('../controllers/webhooks')

router.post("/webhooks", webhooksCtrl.createWebHooks)

router.delete("/webhooks/:id", webhooksCtrl.deleteWebhooks)

module.exports = router