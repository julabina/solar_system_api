const planets = [
    {
        name: "Mercure",
        distance: 0.38,
        diameter: 4879,
        day_duration: 175.94,
        orbital_duration: 87.97,
        type: 'tellurique',
        moons : []
    },
    {
        name: "Venus",
        distance: 0.72,
        diameter: 12104,
        day_duration: 243.16,
        orbital_duration: 224.7,
        type: 'tellurique',
        moons : []
    },
    {
        name: "Terre",
        distance: 1,
        diameter: 12756,
        day_duration: 24,
        orbital_duration: 365.26,
        type: 'tellurique',
        moons : ["Lune"]
    },
    {
        name: "Mars",
        distance: 1.52,
        diameter: 6794,
        day_duration: 24.7,
        orbital_duration: 687,
        type: 'tellurique',
        moons : ["Phobos", "deimos"]
    },
    {
        name: "Jupiter",
        distance: 5.20,
        diameter: 142984,
        day_duration: 9.93,
        orbital_duration: 4331,
        type: 'gazeuse',
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
        type: 'gazeuse',
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
        type: 'gazeuse',
        moons : ["Cordélia", "Ophélie", "Bianca", "Cressida", "Desdémone", "Juliette", "Portia", "Rosalinde", "Cupid", "Belinda", "Perdita", "Puck", "Mab", "Miranda", "Ariel", "Umbriel", "Titania", "Obéron",
            "Francisco", "Caliban", "Stephano", "Trinculo", "Sycorax", "Margaret", "Prospero", "Setebos", "Ferdinand"]
    },
    {
        name: "Neptune",
        distance: 30.1,
        diameter: 49244,
        day_duration: 16.1,
        orbital_duration: 60182,
        type: 'gazeuse',
        moons : ["Naïade", "Thalassa", "Despina", "Galatée", "Larissa", "Hippocampe", "Protée", "Triton", "Néréide", "Halimède", "Sao", "Laomédie", "Psamathée", "Néso"]
    }
];

const moons = [
    {
        name: "Phobos",
        periapsis: 9236,
        apoapsis: 9519,
        diameter: 12.4,
        orbital_duration: 0.32,
        orbitOn: "Mars"
    },
    {
        name: "Deimos",
        periapsis: 23450,
        apoapsis: 23466,
        diameter: 22.2,
        orbital_duration: 1.26,
        orbitOn: "Mars"
    },
    {
        name: "Lune",
        periapsis: 362600,
        apoapsis: 405400,
        diameter: 3474.8,
        orbital_duration: 27.32,
        orbitOn: "Terre"
    },
    {
        name: "Europe",
        periapsis: 664792,
        apoapsis: 677408,
        diameter: 3121.6,
        orbital_duration: 3.55,
        orbitOn: "Jupiter"
    },
    {
        name: "Io",
        periapsis: 420071,
        apoapsis: 423529,
        diameter: 3643.2,
        orbital_duration: 1.769,
        orbitOn: "Jupiter"
    },
    {
        name: "Ganymède",
        periapsis: 1069008,
        apoapsis: 1071792,
        diameter: 5262.4,
        orbital_duration: 7.16,
        orbitOn: "Jupiter"
    },
    {
        name: "Callisto",
        periapsis: 1868768,
        apoapsis: 1896632,
        diameter: 4820.6,
        orbital_duration: 16.70,
        orbitOn: "Jupiter"
    },
    {
        name: "Mimas",
        periapsis: 181902,
        apoapsis: 189176,
        diameter: 396.5,
        orbital_duration: 0.94,
        orbitOn: "Saturne"
    },
    {
        name: "Encelade",
        periapsis: 236918,
        apoapsis: 239156,
        diameter: 504.2,
        orbital_duration: 1.37,
        orbitOn: "Saturne"
    },
    {
        name: "Téthys",
        periapsis: 294643,
        apoapsis: 294701,
        diameter: 1066,
        orbital_duration: 1.89,
        orbitOn: "Saturne"
    },
    {
        name: "Dione",
        periapsis: 376585,
        apoapsis: 378245,
        diameter: 1123.4,
        orbital_duration: 2.74,
        orbitOn: "Saturne"
    },
    {
        name: "Rhéa",
        periapsis: 562541,
        apoapsis: 527595,
        diameter: 1528.6,
        orbital_duration: 4.52,
        orbitOn: "Saturne"
    },
    {
        name: "Titan",
        periapsis: 1186675,
        apoapsis: 1257055,
        diameter: 5149.4,
        orbital_duration: 15.95,
        orbitOn: "Saturne"
    },
    {
        name: "Japet",
        periapsis: 3456518,
        apoapsis: 3665184,
        diameter: 1471.2,
        orbital_duration: 79.33,
        orbitOn: "Saturne"
    },
    {
        name: "Miranda",
        periapsis: 129731,
        apoapsis: 130069,
        diameter: 471.6,
        orbital_duration: 1.41,
        orbitOn: "Uranus"
    },
    {
        name: "Ariel",
        periapsis: 190671,
        apoapsis: 191129,
        diameter: 1157.8,
        orbital_duration: 2.52,
        orbitOn: "Uranus"
    },
    {
        name: "Umbriel",
        periapsis: 264963,
        apoapsis: 267037,
        diameter: 1169.4,
        orbital_duration: 4.14,
        orbitOn: "Uranus"
    },
    {
        name: "Titania",
        periapsis: 435820,
        apoapsis: 436780,
        diameter: 1577.8,
        orbital_duration: 8.71,
        orbitOn: "Uranus"
    },
    {
        name: "Oberon",
        periapsis: 582683,
        apoapsis: 584317,
        diameter: 1522.8,
        orbital_duration: 13.46,
        orbitOn: "Uranus"
    },
    {
        name: "Triton",
        periapsis: 354753,
        apoapsis: 354765,
        diameter: 2706.8,
        orbital_duration: 5.88,
        orbitOn: "Neptune"
    }
];

const satellites = [
    {
        name: "Iss",
        periapsis: 415000,
        apoapsis: 421000,
        orbital_duration: 0.16,
        orbitOn: "Terre"
    }
];

module.exports = {
    planets, moons, satellites
}