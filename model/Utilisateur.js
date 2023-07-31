const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nom:String,
	prenom :String,
	identifiant: Boolean,
	password : Number
}, { collection: 'Utilisateur' })
module.exports = mongoose.model('Utilisateur',UserSchema);