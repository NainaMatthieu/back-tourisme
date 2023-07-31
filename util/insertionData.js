const { MongoClient, ObjectId } = require('mongodb');

const TouristSpots = require('../model/TouristSpots');
// Remplacez les variables suivantes par vos informations
const uri =process.env.DB_URL;
const dbName = 'tourisme';
const Categorie = require('../model/Categorie');

async function insertTS_Cat() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('TouristSpots');
    
    const documents = [
        
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Parc Ranomafana',
            location: 'Haute Matsiatra et de Vatovavy-Fitovinany',
            description : `
            Ce parc a été créé en 1991 et se trouve dans les régions de la Haute Matsiatra et de Vatovavy-Fitovinany. Couvrant près de 41601 hectares, il figure parmi l’un des plus beaux parcs du pays et récence de nombreuses espèces animales et végétales endémiques.
            
            Le Parc de Ranomafana Ifanadiana compte près de 115 espèces d’oiseaux, 90 espèces de papillons, plusieurs espèces de reptiles et d’amphibiens. Le parc est aussi apprécié pour sa station thermale propice pour les traitements curatifs.
            `,
            video: 'touristspots/video/ranomafana.mp4',
            image: [
                {
                url : 'touristspots/img/ranomafana.jpg'
                }
            ],
          })
        ,
    
        new TouristSpots({
            _id : new ObjectId(),
            name: 'Parc d’Isalo ',
            location: 'Région d’Ihorombe',
            description : `Il est l’un des sites les plus visités à Madagascar. Le parc d’Isalo est un massif ruiniforme de l’ère jurassique dont la beauté ne peut pas être contée. Il se trouve dans la région d’Ihorombe à près de 279 kilomètres au sud de Fianarantsoa. Le parc renferme de nombreuses espèces de lémuriens diurnes et nocturnes, plusieurs carnivores, des reptiles, des amphibiens, des rongeurs et près de 77 espèces d’oiseaux. Il est aussi loué pour ses plantes fascinantes, dont le Pachypodium rosulatum. Le Varika, l’incroyable lémurien qui fait le renom de Madagascar est aussi présent dans ce parc.`,
            video: 'touristspots/video/isalo.mp4',
            image: [
                {
                url : 'touristspots/img/isalo.jpg'
                }
            ],
            distance : 100,
            guide : true,
            score : 100
          })
      ];
    // Insertion du document dans la collection
   const result = await collection.insertMany(documents);
   await insertCategorie(db);
   console.log('touristSpots insérés avec succès avec les ids personnalisés:', result.insertedIds);
    } catch (err) {
    console.error('Une erreur s\'est produite:', err);
    } finally {
    client.close();
    }
}
async function insertCategorie(db) {
  try {
    const collection = db.collection('Categorie');
    
    const documents = [
        
          new Categorie({
            _id : new ObjectId(),
            titre: 'Réserves naturelles',
            url : null
          })
        ,
        new Categorie({
          _id : new ObjectId(),
          titre: 'Plages',
          url : null
        }),
        new Categorie({
          _id : new ObjectId(),
          titre: 'Montagnes',
          url : null
        }),
        new Categorie({
          _id : new ObjectId(),
          titre: 'Forêts',
          url : null
        }),
        new Categorie({
          _id : new ObjectId(),
          titre: 'deserts',
          url : null
        }),
        new Categorie({
          _id : new ObjectId(),
          titre: 'Station thermale',
          url : null
        })
      ];
    // Insertion du document dans la collection
   const result = await collection.insertMany(documents);
   console.log('Categorie insérés avec succès avec les ids personnalisés:', result.insertedIds);
    } catch (err) {
    console.error('Une erreur s\'est produite:', err);
    }
}
module.exports = insertTS_Cat;