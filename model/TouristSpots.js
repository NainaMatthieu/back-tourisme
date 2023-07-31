const mongoose = require('mongoose');

const TouristSpotsSchema = mongoose.Schema({
	name:String,
    location:String,
	idCategorie:String,
	description :String,
	video: String,
	isPopulaire : {
		type : Boolean,
		value : false
	},
	image: [
        {
		url : String
	    }
    ],
	distance : Number,
	guide : Boolean,
	score : Number
}, { collection: 'TouristSpots' })
module.exports = mongoose.model('TouristSpots',TouristSpotsSchema);