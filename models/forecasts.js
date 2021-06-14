const mongoose = require('mongoose');

const forecastSchema = mongoose.Schema({
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    sample: {type: Number}
});

module.exports = mongoose.model('Forecast', forecastSchema);