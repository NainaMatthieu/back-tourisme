const mongoose = require('mongoose');

const TouristSpotsSchema = mongoose.Schema({
    name:String,
    lieu:String,
	type:String,
	description :String,
	video: String,
	isPopulaire : Boolean,
	image: [
        {
		url : String
	    }
    ],
}, { collection: 'TouristSpots' })
module.exports = mongoose.model('TouristSpots',TouristSpotsSchema);