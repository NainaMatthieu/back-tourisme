const mongoose = require('mongoose');

const TouristSpotsSchema = mongoose.Schema({
	name:String,
    location:String,
	idCategorie:String,
	description :String,
	url:String,
	isPopulaire : {
		type : Boolean,
		value : false
	},
	video:{
		type: String,
		value : 'touristspots/video/default.mp4'
	},
	image: [
        {
		url : String,
	    }
    ],
	distance : Number,
	guide : Boolean,
	score : Number
}, { collection: 'TouristSpots' })
module.exports = mongoose.model('TouristSpots',TouristSpotsSchema);