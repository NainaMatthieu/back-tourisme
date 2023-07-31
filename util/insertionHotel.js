const Hotel = require('./model/Hotel');
let h = new Hotel({
    titre : 'Andilana Beach Resort',
    description : `
    Situé au cœur de Paris, cet hôtel allie charme classique et modernité. Proche des principales attractions touristiques comme la Tour Eiffel et le Louvre, il propose des chambres confortables avec toutes les commodités. Vous pourrez profiter du restaurant français, du bar élégant, du spa et de la salle de sport. Idéal pour un séjour inoubliable à Paris, que ce soit pour les affaires ou les loisirs.
    `,
    location :`Andilana Beach est une plage paradisiaque située sur l'île de Nosy Be à Madagascar, dans le canal du Mozambique. Réputée pour ses eaux turquoise, son sable blanc et ses magnifiques couchers de soleil, cette plage est l'une des plus célèbres de Nosy Be. Elle attire les voyageurs en quête de détente, de belles plages, d'activités nautiques et de découverte de la biodiversité marine de la région.`,
    prix : 1000000,
    wifi : true
})
h.save();