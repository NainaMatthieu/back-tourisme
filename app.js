const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');

const app = express();
const certFilePath = './certificat/certificate.pem';
const keyFilePath = './certificat/privatekey.pem';
// Lecture du certificat et de la clé privée
const cert = fs.readFileSync(certFilePath);
const key = fs.readFileSync(keyFilePath);

// Options serveur HTTPS
const options = {
  cert: cert,
  key: key
};
const server = https.createServer(options, app);
app.use(cors());
app.use(bodyParser.json());

const TouristSpotRoute = require('./router/TouristSpotsRoute');
app.use('/touristspots', TouristSpotRoute);

const CategorieRoute = require('./router/CategorieRoute');
app.use('/categorie', CategorieRoute);
server.listen(9000);
