const { MongoClient, ObjectId } = require('mongodb');

const TouristSpots = require('../model/TouristSpots');
// Remplacez les variables suivantes par vos informations
const uri =process.env.DB_URL;
const dbName = 'tourisme';
const collectionName = 'TouristSpots';

async function createDocumentWithCustomId() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const documents = [
        
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Parc Ranomafana',
            lieu: 'Haute Matsiatra et de Vatovavy-Fitovinany',
            type : 'Station thermale',
            description : `
            Ce parc a été créé en 1991 et se trouve dans les régions de la Haute Matsiatra et de Vatovavy-Fitovinany. Couvrant près de 41601 hectares, il figure parmi l’un des plus beaux parcs du pays et récence de nombreuses espèces animales et végétales endémiques.
            
            Le Parc de Ranomafana Ifanadiana compte près de 115 espèces d’oiseaux, 90 espèces de papillons, plusieurs espèces de reptiles et d’amphibiens. Le parc est aussi apprécié pour sa station thermale propice pour les traitements curatifs.
            `,
            video: '/vid/api/videos/0.mp4',
            image: [
                {
                url : '/vid/api/images/ranomafana.jpg'
                }
            ],
          })
        ,
    
        new TouristSpots({
            _id : new ObjectId(),
            name: 'Parc d’Isalo ',
            lieu: 'Région d’Ihorombe',
            type : 'Réserve naturelle.',
            description : `Il est l’un des sites les plus visités à Madagascar. Le parc d’Isalo est un massif ruiniforme de l’ère jurassique dont la beauté ne peut pas être contée. Il se trouve dans la région d’Ihorombe à près de 279 kilomètres au sud de Fianarantsoa. Le parc renferme de nombreuses espèces de lémuriens diurnes et nocturnes, plusieurs carnivores, des reptiles, des amphibiens, des rongeurs et près de 77 espèces d’oiseaux. Il est aussi loué pour ses plantes fascinantes, dont le Pachypodium rosulatum. Le Varika, l’incroyable lémurien qui fait le renom de Madagascar est aussi présent dans ce parc.`,
            video: '/vid/api/videos/0.mp4',
            image: [
                {
                url : '/vid/api/images/isalo.jpg'
                }
            ],
          })
      ];
    // Insertion du document dans la collection
   const result = await collection.insertMany(documents);
   console.log('Documents insérés avec succès avec les ids personnalisés:', result.insertedIds);
    } catch (err) {
    console.error('Une erreur s\'est produite:', err);
    } finally {
    client.close();
    }
}
module.exports = createDocumentWithCustomId;