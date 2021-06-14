const mongoose = require('mongoose');

const temperatureSchema = mongoose.Schema({
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    max: {type: Number, required: true},
    min: {type: Number, required: true},
    sample: {type: Number}
}, {timestamps: true});


module.exports = mongoose.model('Temperature', temperatureSchema);