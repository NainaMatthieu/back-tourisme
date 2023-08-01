const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');

const app = express();
const certFilePath = './certificat/certificate.pem';
const keyFilePath = './certificat/privatekey.pem';
const passphrase = 'to1rism2ex0mf1nAL';

// Options serveur HTTPS
const options = {
  cert: fs.readFileSync(certFilePath),
  key: fs.readFileSync(keyFilePath),
  passphrase: passphrase
};

const server = https.createServer(options, app);

app.use(cors());
app.use(bodyParser.json());

const TouristSpotRoute = require('./router/TouristSpotsRoute');
app.use('/touristspots', TouristSpotRoute);

const CategorieRoute = require('./router/CategorieRoute');
app.use('/categorie', CategorieRoute);


const UserRoute = require('./router/UtilisateurRoute');
app.use('/categorie', UserRoute);
server.listen(9000);
