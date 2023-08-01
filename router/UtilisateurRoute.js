const express = require('express');
const router = express.Router();
const Utilisateur = require('../model/Utilisateur');
//localhost:9000/user/login 
router.post('/login', (req, res) => {
   Utilisateur.find({mail : req.body.mail, password : req.body.password}).exec()
   .then(user => {
        if(user.length ==0)
            return res.status(404).json({error : 'Login ou mots de passe incorrecte'})
        return res.status(200).json({success : user});
   })
   .catch(err => {
     console.error('Erreur lors de la récuperation des hôtels :', err);
     return res.status(500).json({ error: 'Erreur serveur' });
   });
});
module.exports = router;