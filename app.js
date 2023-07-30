const express = require('express');
const app = express();

const cors  = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');
// const createDocumentWithCustomId = require('./util/insertionData');

// insertion data
// createDocumentWithCustomId()
//   .then(insertedId => {
//     console.log('Id inséré:', insertedId);
//   })
//   .catch(err => {
//     console.error('Erreur lors de l\'insertion du document:', err);
//   });
app.use(bodyParser.json());
app.use(cors());

const videoRoute = require("./router/VideoList");
app.use('/vid',videoRoute);

const TouristSpotRoute = require('./router/TouristSpotsRoute');
app.use('/touristspots',TouristSpotRoute);

app.listen(9000);