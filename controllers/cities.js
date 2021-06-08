const City = require("../models/cities");


exports.getAllCity = (req, res, next) => {
    City.find().then(data => {
      res.status(200).json({
        cities: data
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}

exports.createCity = (req, res, next) => {
    City.findOne({name: req.body.name}).then(exits =>{
        if(exits){
            return res.status(409).json({
                message: 'City already exits'
            })
        } else{
            const city = new City({
                name: req.body.name,
                latitude: req.body.latitude,
                longitude: req.body.longitude
              })
              return city.save().then(cities => {
                res.status(201).json({
                  message: "A city has been created",
                  cityCreated: {
                    _id: cities._id,
                    name: cities.name,
                    latitude: cities.latitude,
                    longitude: cities.longitude
                  }
                })
              })
              .catch(err => {
                res.status(500).json({
                  message: 'Unable to create a city',
                  error: err
                })
              })
        }
    }).catch(err =>{
        res.status(500).json({
            message: 'Error occured in the database',
            error: err
          }) 
    })
}

exports.updateCity = (req, res, next) => {
    const id = req.params.id;
    City.findOneAndUpdate({_id: id},{
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }).exec().then(result => {
      res.status(200).json({
        message: "City updated"
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
}

exports.deleteCity = (req, res, next) => {
    const id = req.params.id
    City.findOneAndDelete({_id: id}).then(result => {
      res.status(200).json({
        message: "City have been deleted"
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
}