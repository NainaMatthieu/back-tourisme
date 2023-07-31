const express = require('express');
const router = express.Router();
const Hotel = require('../model/Hotel');

//localhost:9000/hotel/list 
//recupérer la liste des hôtels
router.get('/list', (req, res) => {
   Hotel.find({}).exec()
   .then(ho => {
     return res.json(ho);
   })
   .catch(err => {
     console.error('Erreur lors de la récuperation des hôtels :', err);
     return res.status(500).json({ error: 'Erreur serveur' });
   });
});
module.exports = router;