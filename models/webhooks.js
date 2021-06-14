const mongoose = require('mongoose');

const webhooksSchema = mongoose.Schema({
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true }
});

module.exports = mongoose.model('Webhooks', webhooksSchema);