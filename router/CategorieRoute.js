const express = require('express');
const router = express.Router();
const Categorie = require('../model/Categorie');
//localhost:9000/categorie/list 
//recupérer la liste des lieux touristiques et ses détails
router.get('/list', (req, res) => {
   Categorie.find({}).exec()
   .then(cat => {
     return res.json(cat);
   })
   .catch(err => {
     console.error('Erreur lors de la récuperation des catégories :', err);
     return res.status(500).json({ error: 'Erreur serveur' });
   });
});
module.exports = router;