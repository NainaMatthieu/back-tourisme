const express = require('express');
const app = express();

const cors  = require('cors');
const bodyParser = require('body-parser');
require('./util/DBConnexion');

// insertion data
// const insertTS_Cat = require('./util/insertionData');
// insertTS_Cat()
//   .then(insertedId => {
//     console.log('Id inséré:', insertedId);
//   })
//   .catch(err => {
//     console.error('Erreur lors de l\'insertion du document:', err);
//   });
app.use(bodyParser.json());
app.use(cors());

const TouristSpotRoute = require('./router/TouristSpotsRoute');
app.use('/touristspots',TouristSpotRoute);

app.listen(9000);