const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const TouristSpots = require('../model/TouristSpots');

const videosDirectory = path.join(__dirname, 'videos');
const imagesDirectory = path.join(__dirname, 'images');

router.get('/api/videos', (req, res) => {
  // Lire le contenu du répertoire "videos"
  fs.readdir(videosDirectory, (err, videoFiles) => {
    if (err) {
      console.error('Erreur lors de la lecture du répertoire des vidéos :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    // Lire le contenu du répertoire "images"
    fs.readdir(imagesDirectory, (err, imageFiles) => {
      if (err) {
        console.error('Erreur lors de la lecture du répertoire des images :', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }

      // Filtrer les fichiers vidéo pour ne récupérer que les vidéos
      const videoFilesFiltered = videoFiles.filter(file => {
        const fileExtension = path.extname(file).toLowerCase();
        return ['.mp4', '.avi', '.mkv', '.mov'].includes(fileExtension);
      });

      // Créer une liste d'objets vidéo avec les noms des fichiers et les URL d'image
      const videoList = videoFilesFiltered.map(file => {
        const imageFile = imageFiles.find(img => img.startsWith(path.basename(file, path.extname(file))));
        const imageUrl = imageFile ? `/vid/api/images/${imageFile}` : '/default-image.jpg'; // Définir une image par défaut si aucune image correspondante n'est trouvée
        return {
          name: file,
          urlvideo: `/vid/api/videos/${file}`,
          urlimg: imageUrl,
        };
      });

      // Renvoyer la liste des vidéos sous forme de réponse JSON
      res.json(videoList);
    });
  });
});  
  // Route pour servir les vidéos individuelles
  router.get('/api/videos/:videoName', (req, res) => {
    const videoName = req.params.videoName;
    const videoPath = path.join(__dirname, 'videos', videoName);
  
    // Vérifiez que le fichier vidéo existe avant de l'envoyer
    fs.access(videoPath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error('Erreur lors de l\'accès au fichier vidéo :', err);
        return res.status(404).send('Vidéo non trouvée');
      }
  
      // Définissez le type MIME du fichier vidéo pour la réponse
      res.set('Content-Type', 'video/mp4'); // Ajustez le type MIME selon le format de votre vidéo
  
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
     return res.status(500).json({ error: 'Erreur serveur' });
   });
});
module.exports = router;