const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
	titre:String,
    location:String,
	description :String,
	wifi: Boolean,
	prix : Number
}, { collection: 'Hotel' })
module.exports = mongoose.model('Hotel',HotelSchema);