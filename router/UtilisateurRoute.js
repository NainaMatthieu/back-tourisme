const express = require('express');
const router = express.Router();
const Utilisateur = require('../model/Utilisateur');
const validator = require('validator');
const {transporter,mailOptions } = require('../util/EmailInformation');

//localhost:9000/user/login 
router.post('/login', (req, res) => {
   Utilisateur.find({mail : req.body.mail, password : String(req.body.password)}).exec()
   .then(user => {
        if(user.length ==0)
            return res.status(404).json({error : 'Login ou mots de passe incorrecte'})
        return res.status(200).json({success : user});
   })
   .catch(err => {
     console.error('Erreur Login :', err);
     return res.status(500).json({ error: 'Erreur serveur' });
   });
});
//localhost:9000/user/:id 
router.get('/:id', (req, res) => {
  Utilisateur.find({_id : req.params.id})
  .then(user => {
       if(user.length ==0)
           return res.status(404).json({error : 'il n\'y a pas d\'utilisateur correspond à l\'id : '+req.params.id})
       return res.status(200).json({success : user});
  })
  .catch(err => {
    console.error('Erreur get by id :', err);
    return res.status(500).json({ error: 'Erreur serveur' });
  });
});
//localhost:9000/user/addfavoris 
router.post('/addfavoris', (req, res) => {
  Utilisateur.findOneAndUpdate(
    { _id: req.body.iduser },
    { $push: { favoris: req.body.touristspot } },
    { new: true }
  )
  .then(user => {
    console.log("Ajout favoris success"+user);
    return res.status(200).json({success : user});
  })
  .catch(err => {
    console.error('Erreur get by id :', err);
    return res.status(500).json({ error: 'Erreur serveur' });
  });
});

//localhost:9000/user/logup 
router.post('/logup', (req, res) => {
  const usertoLogup = {
    nom : req.body.nom,
    prenom : req.body.prenom,
    mail : req.body.mail,
    password : req.body.password
  }
  // console.log(validerChamp(usertoLogup))
  if(!validerChamp(usertoLogup))
    return res.status(404).json({error : "Tous les champs sont obligatoires."});

  if(!validator.isEmail(usertoLogup.mail))
    return res.status(404).json({error : 'Email Invalide'});

  Utilisateur.find({mail : req.body.mail}).exec()
  .then(user => {
      if(user.length >0)
        return res.status(409).json({error : 'Email déja existant'});
        
      mailOptions.to =usertoLogup.mail; 
      transporter.sendMail(mailOptions,(error, info) =>{
        if (error) {
          console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        } else {
          console.error('Sucesss :', info);
          let usertoSave = new Utilisateur(usertoLogup)
          usertoSave.save()
          .then(savedUser => {
            console.log('Utilisateur enregistré:', savedUser);
            return res.status(200).json({success : savedUser});
          })
          .catch(error => {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
          });
        
        }
      });
  })
  .catch(err => {
    console.error('Erreur Logup :', err);
    return res.status(500).json({ error: 'Erreur serveur' });
  });
});
function validerChamp(user) {
  // const plainUser = user.toObject();
  const values = Object.values(user);
  for (const value of values) {
    if (value === null || value === undefined || String(value).trim() === '') {
      return false;
    }
  }
  return true;
}

module.exports = router;