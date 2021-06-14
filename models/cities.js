const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true} 
});

module.exports = mongoose.model('City', citySchema);