const Temperature = require('../models/temperature')
const City = require('../models/cities');


exports.appendTemperatures = async (req, res, next) => {
    const cityid = req.body.city_id;
    City.find({_id: cityid}).then(temperatures => {
      if (!temperatures) {
        return res.status(404).json({
          message: "City not found"
        })
      }
      const temperature = new Temperature({
        city_id: cityid,
        min: req.body.min,
        max: req.body.max
      })
      return temperature.save()
    })
    .then(result => {
      res.status(201).json({
        message: "Temperature have been appended",
        data: {
          result
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