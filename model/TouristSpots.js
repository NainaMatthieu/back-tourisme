const mongoose = require('mongoose');

const TouristSpotsSchema = mongoose.Schema({
    name:String,
    lieu:String,
	type:String,
	description :String,
	video: String,
	image: [
        {
		url : String
	    }
    ],
})
module.exports = mongoose.model('TouristSpots',TouristSpotsSchema);