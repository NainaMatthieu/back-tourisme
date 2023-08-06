const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
	titre:String,
    location:String,
	description :String,
	bed : Number,
	guide : Boolean,
	score : Number,
	pic : String,
	wifi: Boolean,
	price : Number
}, { collection: 'Hotel' })
module.exports = mongoose.model('Hotel',HotelSchema);