const City = require('../models/temperature')
const Webhooks = require('../models/webhooks')

exports.createWebHooks = async (req, res, next) => {
    City.find({_id: req.body.city_id}).then(webhooks => {
      if (!webhooks) { 
        return res.status(404).json({
          message: "City Id is not valid"
        })
      }
      const webhook = new Webhooks({
        city_id: req.body.city_id,
      })
      return webhook.save()
    })
    .then(result => {
      res.status(201).json({
        message: "Webhook have been created",
        data: {
          _id: result._id,
          city_id: result.city_id,
          callback_url: "https://my.service.com/high-temperature"
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

exports.deleteWebhooks = (req, res, next) => {
  const id = req.params.id
  Webhooks.findOneAndDelete({_id: id}).then(result => {
    res.status(200).json({
      message: "Webhooks have been deleted"
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}
