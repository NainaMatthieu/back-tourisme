const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nom:String,
	prenom :String,
	mail: String,
	password : String,
	favoris : {
		type : Array,
		default : null
	}
}, { collection: 'Utilisateur' })
module.exports = mongoose.model('Utilisateur',UserSchema);