const mongoose = require('mongoose');
require('dotenv/config');
// console.log(process.env.DB_URL);
mongoose.set('debug', true);
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion réussie à MongoDB !');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error.message);
  }
}

connectToDatabase();

module.exports = mongoose;
