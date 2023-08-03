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
            distance : 500,
            guide : false,
            score : 80,
            idCategorie : '64c74b287b8b715cc336d3ed',
            isPopulaire : false,
            url : "Ranomafana"
          })
        ,
    
        new TouristSpots({
            _id : new ObjectId(),
            name: 'Parc d’Isalo ',
            location: 'Tuléar',
            description : `Il est l’un des sites les plus visités à Madagascar. Le parc d’Isalo est un massif ruiniforme de l’ère jurassique dont la beauté ne peut pas être contée. Il se trouve dans la région d’Ihorombe à près de 279 kilomètres au sud de Fianarantsoa. Le parc renferme de nombreuses espèces de lémuriens diurnes et nocturnes, plusieurs carnivores, des reptiles, des amphibiens, des rongeurs et près de 77 espèces d’oiseaux. Il est aussi loué pour ses plantes fascinantes, dont le Pachypodium rosulatum. Le Varika, l’incroyable lémurien qui fait le renom de Madagascar est aussi présent dans ce parc.`,
            video: 'touristspots/video/isalo.mp4',
            image: [
                {
                url : 'touristspots/img/isalo.jpg'
                }
            ],
            distance : 100,
            guide : true,
            score : 4,
            idCategorie : '64c74b287b8b715cc336d3e3',
            url : "Isalo",
            isPopulaire : true,
          }),
          
        new TouristSpots({
          _id : new ObjectId(),
          name: 'Parc National d\'Andasibe',
          location: 'Andasibe',
          description : `Le parc national d'Andasibe, trésor de biodiversité à Madagascar, enchante avec ses forêts luxuriantes abritant le rare lémur indri. Les chants d'oiseaux exotiques résonnent parmi les végétations variées, tandis que les cascades ajoutent à la magie de ce paradis naturel. Une immersion inoubliable dans la faune et la flore malgaches.`,
          video: 'touristspots/video/default.mp4',
          image: [
              {
              url : 'touristspots/img/default.jpg'
              }
          ],
          distance : 100,
          guide : true,
          score : 4,
          idCategorie : '64c74b287b8b715cc336d3e3',
          url : "Andasibe",
          isPopulaire : true,
        }),
        
        new TouristSpots({
          _id : new ObjectId(),
          name: ' Parc Nation d\'Ankarafantsika',
          location: 'Mahajanga',
          description : `Le parc national d'Ankarafantsika, précieux écosystème à Madagascar, séduit par sa diversité exceptionnelle. Entre forêts sèches, lacs et savanes, il abrite une faune unique : lémuriens, oiseaux rares et caméléons colorés. Une réserve naturelle préservée, offrant des opportunités de randonnées et d'observation de la vie sauvage incomparables.`,
          video: 'touristspots/video/ankarafantsika.mp4',
          image: [
              {
              url : 'touristspots/img/ankarafantsika.jpg'
              }
          ],
          distance : 100,
          guide : true,
          score : 4,
          idCategorie : '64c74b287b8b715cc336d3e3',
          url : "ankarafantsika",
          isPopulaire : false,
        }),
        
        new TouristSpots({
          _id : new ObjectId(),
          name: 'Allée des Baobabs',
          location: 'Morondava',
          description : `L'Allée des Baobabs en Madagascar est un spectacle naturel éblouissant. Bordée de majestueux baobabs, certains âgés de plusieurs siècles, cette avenue emblématique offre des couchers de soleil envoûtants. Symboles de la terre malgache, ces arbres créent un paysage saisissant, capturant l'essence de la beauté sauvage de Madagascar.`,
          video: 'touristspots/video/default.mp4',
          image: [
              {
              url : 'touristspots/img/default.jpg'
              }
          ],
          distance : 100,
          guide : true,
          score : 3.75,
          idCategorie : '64cb5534dbb91f2a4541e407',
          url : "alleeBaobabs",
          isPopulaire : false,

        }),
        new TouristSpots({
          _id : new ObjectId(),
          name: 'Massif du Makay',
          location: 'Nord de l\'Isalo',
          description : `Le Massif du Makay en Madagascar est un labyrinthe de canyons, de falaises et de forêts, préservant une biodiversité unique. Cette énigmatique et isolée région abrite des espèces endémiques, des lémuriens aux caméléons. Explorer ses paysages époustouflants est une aventure inégalée, révélant la splendeur naturelle et la rareté de Madagascar.`,
          video: 'touristspots/video/default.mp4',
          image: [
              {
              url : 'touristspots/img/default.jpg'
              }
          ],
          distance : 100,
          guide : true,
          score : 4,
          idCategorie : '64cb5534dbb91f2a4541e407',
          url : "Makay"
        }),new TouristSpots({
          _id : new ObjectId(),
          name: 'Allée des Baobabs',
          location: 'Morondava',
          description : `L'Allée des Baobabs en Madagascar est un spectacle naturel éblouissant. Bordée de majestueux baobabs, certains âgés de plusieurs siècles, cette avenue emblématique offre des couchers de soleil envoûtants. Symboles de la terre malgache, ces arbres créent un paysage saisissant, capturant l'essence de la beauté sauvage de Madagascar.`,
          video: 'touristspots/video/default.mp4',
          image: [
              {
              url : 'touristspots/img/default.jpg'
              }
          ],
          distance : 100,
          guide : true,
          score : 4,
          idCategorie : '64cb5534dbb91f2a4541e407',
          url : "Isalo",
          isPopulaire : true,
        }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Tsingy de Bemaraha',
            location: 'Morondava',
            description : `
            Le Tsingy de Bemaraha, site extraordinaire de Madagascar, dévoile un paysage lunaire sculpté par l'érosion, caractérisé par ses formations calcaires acérées. Cette réserve de biosphère abrite une faune et une flore uniques dans ses crevasses et grottes. Une merveille géologique et un sanctuaire de la nature à explorer avec émerveillement.`,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score :  4.5,
            idCategorie : '64c74b287b8b715cc336d3e5',
            isPopulaire : true,
            url: 'Tsingy'
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Rova d\'Ambohimanga',
            location: 'Antananarivo',
            description : `
            Le Rova d'Ambohimanga, site sacré près d'Antananarivo à Madagascar, est un symbole historique et spirituel. Niché au sommet d'une colline, il abrite des palais, des tombeaux royaux et des structures cérémonielles en pierre. Témoin de la royauté malgache, c'est un lieu chargé d'histoire, de culture et de vues panoramiques saisissantes.`,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score :  4.5,
            idCategorie : '64c74b287b8b715cc336d3e9',
            isPopulaire : true,
            url: 'Ambohimanga'
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Palais de la reine',
            location: 'Antananarivo',
            description : `
            Le Palais de la Reine, connu sous le nom de Manjakamiadana, incarne l'histoire royale de Madagascar. Situé à Antananarivo, il témoigne de l'architecture malgache traditionnelle avec ses toits pointus et ses motifs complexes en bois. Jadis résidence des monarques, il offre un aperçu culturel précieux de l'ancienne royauté malgache.`,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score :  5,
            idCategorie : '64c74b287b8b715cc336d3e9',
            isPopulaire : true,
            url: 'RovaManjakamiadana'
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Manda fort',
            location: 'Foulpointe',
            description : `
            Le Fort Manda à Foulpointe, Madagascar, est un vestige colonial qui évoque l'histoire maritime de la région. Cette structure en pierre, jadis un poste de défense, se dresse près de la plage, offrant une vue panoramique sur l'océan. Témoin du passé et point d'intérêt culturel, il incarne le mélange d'influences à Foulpointe.`,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score :  5,
            idCategorie : '64c74b287b8b715cc336d3e9',
            isPopulaire : true,
            url: 'MandaFort'
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Antsanitia',
            location: 'Majunga',
            description : `
            La plage d'Antsanitia à Mahajanga, émerveille par son étendue de sable doré bordée de cocotiers. Les eaux turquoise peu profondes invitent à la baignade, tandis que les couchers de soleil spectaculaires parachèvent ce cadre idyllique. Un havre de paix tropical.
            `,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score : 5,
            idCategorie : '64c74b287b8b715cc336d3ed',
            url : "antsanitia",
            isPopulaire : true,

          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Ifaty',
            location: 'Tuléar',
            description : `
            Ifaty, joyau côtier de Madagascar, charme avec ses plages de corail blanc, sa biodiversité marine captivante pour la plongée, et ses villages Vezo authentiques. Un équilibre entre nature préservée et culture locale.
            `,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score : 4.75,
            idCategorie : '64c74b287b8b715cc336d3ed',
            url : 'Ifaty',
            isPopulaire : true,
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Ifaty',
            location: 'Tuléar',
            description : `
            Ifaty, joyau côtier de Madagascar, charme avec ses plages de corail blanc, sa biodiversité marine captivante pour la plongée, et ses villages Vezo authentiques. Un équilibre entre nature préservée et culture locale.
            `,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score : 4.75,
            idCategorie : '64c74b287b8b715cc336d3ed',
            url : 'Ifaty',
            isPopulaire : true,
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Ifaty',
            location: 'Tuléar',
            description : `
            Ifaty, joyau côtier de Madagascar, charme avec ses plages de corail blanc, sa biodiversité marine captivante pour la plongée, et ses villages Vezo authentiques. Un équilibre entre nature préservée et culture locale.
            `,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score : 4.75,
            idCategorie : '64c74b287b8b715cc336d3ed',
            url : 'Ifaty',
            isPopulaire : false,
          }),
          new TouristSpots({
            _id : new ObjectId(),
            name: 'Ifaty',
            location: 'Tuléar',
            description : `
            Ifaty, joyau côtier de Madagascar, charme avec ses plages de corail blanc, sa biodiversité marine captivante pour la plongée, et ses villages Vezo authentiques. Un équilibre entre nature préservée et culture locale.
            `,
            video: 'touristspots/video/default.mp4',
            image: [
                {
                url : 'touristspots/img/default.jpg'
                }
            ],
            distance : 500,
            guide : false,
            score : 4.75,
            idCategorie : '64c74b287b8b715cc336d3ed',
            url : 'Ifaty',
            isPopulaire : true,
          })
      ];
    // Insertion des documents dans TouristSpots et categorie
   const result = await collection.insertMany(documents);
  //  await insertCategorie(db);
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
// const Categorie = require('./model/Categorie');
// let c= new Categorie({
//   _id : new ObjectId(),
//   titre: 'Découverte',
//   url : null
// });
// c.save();
module.exports = insertTS_Cat;