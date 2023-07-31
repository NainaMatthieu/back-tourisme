const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const TouristSpots = require('../model/TouristSpots');

const videosDirectory = path.join(__dirname, 'videos');
const imagesDirectory = path.join(__dirname, 'images');

// Route pour servir les images individuelles
router.get('/img/:imgname', (req, res) => {
  const imgName = req.params.imgname; // Utilisez la même casse pour récupérer le nom de l'image
  const imgPath = path.join(__dirname, 'images', imgName);
  const typeMime = imgPath.substring(imgPath.indexOf('.')+1,imgPath.length);
  // Vérifiez que le fichier image existe avant de l'envoyer
  fs.access(imgPath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error('Erreur lors de l\'accès au fichier image :', err);
      return res.status(404).send('Image non trouvée');
    }

    // Définissez le type MIME du fichier image pour la réponse
    res.set('Content-Type', 'image/'+typeMime); // Ajustez le type MIME selon le format de votre image

    // Envoyer le fichier image en réponse
    res.sendFile(imgPath);
  });
});
  // Route pour servir les vidéos individuelles
  router.get('/video/:videoName', (req, res) => {
    const videoName = req.params.videoName;
    const videoPath = path.join(__dirname, 'videos', videoName);
    const typeMime = videoPath.substring(videoPath.indexOf('.')+1,videoPath.length);
    
    // Vérifiez que le fichier vidéo existe avant de l'envoyer
    fs.access(videoPath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error('Erreur lors de l\'accès au fichier vidéo :', err);
        return res.status(404).send('Vidéo non trouvée');
      }
  
      // Définissez le type MIME du fichier vidéo pour la réponse
      res.set('Content-Type', 'video/'+typeMime); // Ajustez le type MIME selon le format de votre vidéo
  
      // Envoyer le fichier vidéo en réponse
      res.sendFile(videoPath);
    });
});
// recupérer la liste des lieux touristiques et ses détails
router.get('/list', (req, res) => {
  console.log(TouristSpots)
   TouristSpots.find({}).exec()
   .then(spots => {
     return res.json(spots);
   })
   .catch(err => {
     console.error('Erreur lors de la recherche des spots touristiques :', err);
     return res.status(500).json({ error: err});
   });
});
// recupérer la liste des meilleurs lieux touristiques et ses détails
router.get('/favoris', (req, res) => {
   TouristSpots.find({isPopulaire : true}).exec()
   .then(spots => {
     return res.json(spots);
   })
   .catch(err => {
     console.error('Erreur lors de la recherche des meilleurs spots touristiques :', err);
     return res.status(500).json({ error: err });
   });
});
module.exports = router;