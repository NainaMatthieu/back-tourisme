const mongoose = require('mongoose');

const CategorieSchema = mongoose.Schema({
    titre:String,
    url : String
}, { collection: 'Categorie' })
module.exports = mongoose.model('Categorie',CategorieSchema);