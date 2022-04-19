const planets = [
    {
        name: "Mercure",
        distance: 0.38,
        diameter: 4879,
        day_duration: 175.94,
        orbital_duration: 87.97,
        moons : null
    },
    {
        name: "Venus",
        distance: 0.72,
        diameter: 12104,
        day_duration: 243.16,
        orbital_duration: 224.7,
        moons : null
    },
    {
        name: "Terre",
        distance: 1,
        diameter: 12756,
        day_duration: 24,
        orbital_duration: 365.26,
        moons : ["Lune"]
    },
    {
        name: "Mars",
        distance: 1.52,
        diameter: 6794,
        day_duration: 24.7,
        orbital_duration: 687,
        moons : ["Phobos", "deimos"]
    },
    {
        name: "Jupiter",
        distance: 5.20,
        diameter: 142984,
        day_duration: 9.93,
        orbital_duration: 4331,
        moons : ["Métis", "Adrastée", "Amalthée", "Thébé", "Io", "Europe", "Ganymède", "Callisto", "Thémisto", "Léda", "Himalia", "Lysithée", "Elara", "Dia", "Carpo", "S/2003 j 12", "Euporie",
            "Jupiter LXXII", "Euphémé", "Jupiter LII", "Jupiter LV", "Jupiter LIV", "S/2003 J 16", "Mnémé", "Euanthé", "Orthosie", "Harpalycé", "Praxidiké", "Thyoné", "Thelxinoé", "Ananké", 
            "Jocaste", "Hermippé", "Hélicé", "Philophrosyne", "Hersé", "S/2003 J 10", "Eurydomé", "Pasithée", "Chaldéné", "Arché", "Jupiter LVI", "Isonoé", "Erinomé", "Calé", "Aitné", "Taygète", "Jupiter LI",
            "S/2003 J 23", "S/2003 J 9", "Carmé", "Eiréné", "Hégémone", "Jupiter LXI", "Jupiter LIX", "Calycé", "Pasiphaé", "Eukéladé", "Spondé", "Cyllène", "Mégaclité", "S/2003 J 4", "Callirrhoé", "Sinopé",
            "Autonoé", "Aédé", "Callichore", "Coré", "S/2003 J 2", "Ersa", "Valétudo", "Jupiter LXIII", "Jupiter LXIV", "Pandia", "Jupiter LXVI", "Jupiter LXVII", "Jupiter LXVIII", "Jupiter LXIX", "Jupiter LXX"]
    },
    {
        name: "Saturne",
        distance: 9.54,
        diameter: 120536,
        day_duration: 10.66,
        orbital_duration: 10747,
        moons : ["S/2009 S 1", "Pan", "Daphnis", "Atlas", "Prométhée", "Pandore", "Epiméthée", "Janus", "Egéon", "Mimas", "Méthone", "Anthée", "Pallène", "Encelade", "Téthys", "Télesto", "Calypso", "Dioné", "Hélène", "Pollux", "Rhéa", "Titan",
            "Hypérion", "Japet", "Kiviuq", "Ijiraq", "Phoebé", "Paaliaq", "Skathi", "Albiorix", "S/2007 S 2", "Bebhionn", "Erriapus", "Siarnaq", "Skoll", "tarvos", "Tarqeq", "Greip", "S/2004 S 13", "Hyrrokkin", "Mundilfari", "Jarnsaxa",
            "S/2006 S 1", "S/2007 S 3", "Narvi", "Belgelmir", "S/2004 S 17", "Suttungr", "Hati", "S/2004 S 12", "Bestla", "Farbauti", "Thrymr", "Aegir", "S/2004 S 7", "S/2006 S 3", "Kari", "Fenrir", "Surtur", "Ymir", "Loge", 
            "Fornjot", "Saturne LIV", "S/2004 S 21", "S/2004 S 22", "S/2004 S 23", "S/2004 S 24", "S/2004 S 25", "S/2004 S 26", "S/2004 S 27", "S/2004 S 28", "S/2004 S 29", "S/2004 S 30", "S/2004 S 31"
            , "S/2004 S 32", "S/2004 S 33", "S/2004 S 34", "S/2004 S 35", "S/2004 S 36", "S/2004 S 37", "S/2004 S 38", "S/2004 S 39"]
    },
    {
        name: "Uranus",
        distance: 19.2,
        diameter: 51118,
        day_duration: 17.24,
        orbital_duration: 30687,
        moons : []
    },
    {
        name: "Neptune",
        distance: 30.1,
        diameter: 49244,
        day_duration: 16.1,
        orbital_duration: 60182,
        moons : []
    }
];

const moons = [

];

const satellites = [

];

module.exports = {
    planets, moons, satellites
}