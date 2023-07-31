const mongoose = require('mongoose');

const ItineraireSchema = mongoose.Schema({
    idUser:String,
	idTouristSpots :String,
	idHotel: String,
}, { collection: 'Itineraire' })
module.exports = mongoose.model('Itineraire',ItineraireSchema);