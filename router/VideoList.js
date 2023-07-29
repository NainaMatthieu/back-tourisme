const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


// Chemin vers le répertoire contenant les vidéos
const videosDirectory = path.join(__dirname, 'videos');
// Route pour récupérer la liste des vidéos
router.get('/api/videos', (req, res) => {
  // Lire le contenu du répertoire "videos"
  fs.readdir(videosDirectory, (err, files) => {
    if (err) {
      console.error('Erreur lors de la lecture du répertoire :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }

    // Filtrer les fichiers pour ne récupérer que les vidéos
    const videoFiles = files.filter(file => {
      const fileExtension = path.extname(file).toLowerCase();
      return ['.mp4', '.avi', '.mkv', '.mov'].includes(fileExtension);
    });

    // Créer une liste d'objets vidéo avec les noms des fichiers
    const videoList = videoFiles.map(file => {
      return {
        name: file,
        url: `/vid/api/videos/${file}` // Vous pouvez ajuster l'URL selon vos besoins
      };
    });

    // Renvoyer la liste des vidéos sous forme de réponse JSON
    res.json(videoList);
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
module.exports = router;