// const placeSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   name: String,
//   tags: Array,
//   location: String,
//   image: String
// });

var places = [
  {
    name: "The Acropolis",
    location: "Athens, Greece",
    tags: ['Ancient', 'Temple', 'Man-made', 'Religious', 'Europe', 'Architecture', 'Museum'],
    image: './Images/Acropolis.png'
  },
  {
    name: "The Blue Lagoon",
    location: "Iceland",
    tags: ['Water', 'Nature', 'Green', 'Europe'],
    image: './Images/BlueLagoon.png'
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    tags: ['Ancient', 'Mountains', 'Man-made', 'South', 'Green'],
    image: './Images/MachuPicchu.png'
  },
  {
    name: "Stonehenge",
    location: "England",
    tags: ['Ancient', 'Man-made', 'Green', 'Europe', 'Museum'],
    image: './Images/Stonehenge.png'
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    tags: ['Mountains', 'Historic', 'City', 'Man-made', 'Religious', 'South'],
    image: './Images/ChristTheRedeemer.png'
  },
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Architecture'],
    image: './Images/EiffelTower.png'
  },
  {
    name: "The Great Wall",
    location: "China",
    tags: ['Mountains', 'Ancient', 'Historic', 'Man-made', 'Green', 'Asia', 'National Park', 'Museum'],
    image: './Images/GreatWallOfChina.png'
  },
  {
    name: "The Great Pyramid of Giza",
    location: "Cairo, Egypt",
    tags: ['Ancient', 'Man-made', 'Museum'],
    image: './Images/GreatPyramidOfGiza.png'
  },
  {
    name: "Niagara Falls",
    location: "U.S.A. / Canada",
    tags: ['Water', 'Nature', 'America', 'Garden', 'National Park', 'Resort'],
    image: './Images/NiagaraFalls.png'
  },
  {
    name: "Hollywood Sign",
    location: "Los Angeles, U.S.A.",
    tags: ['Resort', 'City', 'Man-made', 'Historic', 'Modern'],
    image: './Images/HollywoodSign.png'
  },
  {
    name: "Berlin Wall",
    location: "Berlin, Germany",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Museum'],
    image: './Images/BerlinWall.png'
  },
  {
    name: "La Sagrada Familia",
    location: "Barcelona, Spain",
    tags: ['Historic', 'City', 'Man-made', 'Religious', 'Europe', 'Architecture'],
    image: './Images/LaSagradaFamilia.png'
  },
  {
    name: "Grand Palace",
    location: "Bangkok, Thailand",
    tags: ['Historic', 'Temple', 'City', 'Man-made', 'Asia', 'Architecture'],
    image: './Images/GrandPalace.png'
  },
  {
    name: "Mount Fuji",
    location: "Japan",
    tags: ['Mountains', 'Nature', 'Asia', 'National Park'],
    image: './Images/MountFuji.png'
  },
  {
    name: "The Strip",
    location: "Nevada, U.S.A.",
    tags: ['City', 'Man-made', 'America', 'Architecture', 'Resort', 'Modern'],
    image: './Images/Strip.png'
  },
  {
    name: "Neuschwanstein Castle",
    location: "Schwangau, Germany",
    tags: ['Mountains', 'Nature', 'Historic', 'Man-made', 'Europe', 'Architecture'],
    image: './Images/NeuschwansteinCastle.png'
  },
  {
    name: "Ubud",
    location: "Bali, Indonesia",
    tags: ['Nature', 'Man-made', 'Green', 'Asia', 'Garden', 'Resort'],
    image: './Images/Ubud.png'
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, United Arab Emirates",
    tags: ['City', 'Man-made', 'Architecture', 'Resort', 'Water', 'Beach', 'Modern'],
    image: './Images/BurjKhalifa.png'
  },
  {
    name: "Statue of Liberty",
    location: "New York, U.S.A.",
    tags: ['Historic', 'City', 'Man-made', 'America', 'Architecture', 'Museum', 'Water', 'Modern'],
    image: './Images/StatueOfLiberty.png'
  },
  {
    name: "Oriental Pearl Tower",
    location: "Shanghai, China",
    tags: ['City', 'Man-made', 'Asia', 'Architecture', 'Modern'],
    image: './Images/OrientalPearlTower.png'
  },
  {
    name: "The Colosseum",
    location: "Rome, Italy",
    tags: ['Ancient', 'City', 'Man-made', 'Europe', 'Museum', 'Architecture'],
    image: './Images/Colosseum.png'
  },
  {
    name: "The Matterhorn",
    location: "Switzerland",
    tags: ['Mountains', 'Nature', 'Europe', 'National Park'],
    image: './Images/Matterhorn.png'
  },
  {
    name: "Blue Mosque",
    location: "Istanbul, Turkey",
    tags: ['Historic', 'Temple', 'City', 'Man-made', 'Religious', 'Europe', 'Architecture'],
    image: './Images/BlueMosque.png'
  },
  {
    name: "Victoria Harbour",
    location: "Hong Kong",
    tags: ['Beach', 'City', 'Man-made', 'Asia', 'Market', 'Architecture', 'Water', 'Modern'],
    image: './Images/VictoriaHarbor.png'
  },
  {
    name: "Library of Celsus",
    location: "Ephesus, Turkey",
    tags: ['Ancient', 'Temple', 'Man-made', 'Museum', 'Architecture'],
    image: './Images/LibraryOfCelsus.png'
  },
  {
    name: "Times Square",
    location: "New York, U.S.A.",
    tags: ['City', 'Man-made', 'America', 'Architecture', 'Modern'],
    image: './Images/TimesSquare.png'
  },
  {
    name: "Buckingham Palace",
    location: "London, England",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Architecture'],
    image: './Images/BuckinghamPalace.png'
  },
  {
    name: "Leaning Tower",
    location: "Pisa, Italy",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Museum', 'Architecture'],
    image: './Images/LeaningTower.png'
  },
  {
    name: "Forbidden City",
    location: "Beijing, China",
    tags: ['Historic', 'Temple', 'City', 'Man-made', 'Asia', 'Museum', 'Architecture'],
    image: './Images/ForbiddenCity.png'
  },
  {
    name: "British Museum",
    location: "London, England",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Museum', 'Modern'],
    image: './Images/BritishMuseum.png'
  },
  {
    name: "Disneyland",
    location: "California, U.S.A.",
    tags: ['City', 'Man-made', 'Modern', 'America', 'Resort'],
    image: './Images/DisneylandResort.png'
  },
  {
    name: "Tulum",
    location: "Mexico",
    tags: ['Beach', 'Nature', 'Green', 'South', 'Water'],
    image: './Images/Tulum.png'
  },
  {
    name: "Gyeongbokgung Palace",
    location: "Seoul, South Korea",
    tags: ['Historic', 'Temple', 'City', 'Asia', 'Architecture'],
    image: './Images/GyeongbokgungPalace.png'
  },
  {
    name: "Disney World",
    location: "Florida, U.S.A.",
    tags: ['City', 'Man-made', 'Modern', 'America', 'Resort'],
    image: './Images/DisneyWorld.png'
  },
  {
    name: "Iguazu Falls",
    location: "Brazil / Argentina",
    tags: ['Nature', 'Green', 'South', 'Garden', 'National Park', 'Water'],
    image: './Images/IguazuFalls.png'
  },
  {
    name: "The Vatican",
    location: "Vatican City",
    tags: ['Historic', 'City', 'Man-made', 'Religious', 'Europe', 'Museum', 'Architecture'],
    image: './Images/VaticanCity.png'
  },
  {
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    tags: ['City', 'Man-made', 'Architecture', 'Water', 'Modern'],
    image: './Images/SydneyOperaHouse.png'
  },
  {
    name: "Mount Everest",
    location: "Nepal / Tibet",
    tags: ['Mountains', 'Nature', 'Asia', 'National Park'],
    image: './Images/MountEverest.png'
  },
  {
    name: "Petra",
    location: "Jordan",
    tags: ['Ancient', 'Man-made', 'Market', 'Museum', 'Architecture'],
    image: './Images/Petra.png'
  },
  {
    name: "The Louvre",
    location: "Paris, France",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Museum', 'Architecture', 'Modern'],
    image: './Images/Louvre.png'
  },
  {
    name: "Terracotta Warriors",
    location: "Xian, China",
    tags: ['Ancient', 'Man-made', 'Asia', 'Museum'],
    image: './Images/TerracottaWarriors.png'
  },
  {
    name: "Borobudur Temple",
    location: "Java, Indonesia",
    tags: ['Ancient', 'Temple', 'Man-made', 'Religious', 'Asia'],
    image: './Images/BorobudurTemple.png'
  },
  {
    name: "Mount Kilimanjaro",
    location: "Tanzania",
    tags: ['Mountains', 'Nature', 'National Park'],
    image: './Images/MountKilimanjaro.png'
  },
  {
    name: "Red Square",
    location: "Moscow, Russia",
    tags: ['Historic', 'Man-made', 'City', 'Modern', 'Asia', 'Market', 'Architecture'],
    image: './Images/RedSquare.png'
  },
  {
    name: "Jemaa el-Fna",
    location: "Marrakech, Morocco",
    tags: ['City', 'Man-made', 'Market', 'Modern'],
    image: './Images/JemaaElFna.png'
  },
  {
    name: "Taj Mahal",
    location: "Agra, India",
    tags: ['Historic', 'Temple', 'Man-made', 'Asia', 'Architecture', 'Museum'],
    image: './Images/TajMahal.png'
  },
  {
    name: "Maiji Shrine",
    location: "Tokyo, Japan",
    tags: ['Historic', 'Temple', 'Man-made', 'Religious', 'Asia', 'Architecture'],
    image: './Images/MeijiShrine.png'
  },
  {
    name: "Table Mountain",
    location: "Cape Town, South Africa",
    tags: ['Mountains', 'Nature', 'City', 'National Park'],
    image: './Images/TableMountain.png'
  },
  {
    name: "Zócalo",
    location: "Mexico City, Mexico",
    tags: ['Historic', 'City', 'Man-made', 'Architecture'],
    image: './Images/Zocalo.png'
  },
  {
    name: "Angkor Archaeological Park",
    location: "Siem Reap, Cambodia",
    tags: ['Ancient', 'Temple', 'Man-made', 'Asia', 'National Park', 'Museum'],
    image: './Images/Angkor.png'
  },
  {
    name: "Galápagos Islands",
    location: "Ecuador",
    tags: ['Beach', 'Mountains', 'Nature', 'Green', 'South', 'Resort', 'Water'],
    image: './Images/Galapagos.png'
  },
  {
    name: "Banff National Park",
    location: "Alberta, Canada",
    tags: ['Mountains', 'Nature', 'Green', 'Water', 'National Park'],
    image: './Images/Banff.png'
  },
  {
    name: "Yellowstone National Park",
    location: "Montana, U.S.A.",
    tags: ['Mountains', 'Nature', 'Green', 'Water', 'National Park'],
    image: './Images/Yellowstone.png'
  },
  {
    name: "Yosemite National Park",
    location: "California, U.S.A.",
    tags: ['Mountains', 'Nature', 'Green', 'Water', 'National Park'],
    image: './Images/Yosemite.png'
  },
  {
    name: "Central Park",
    location: "New York, U.S.A.",
    tags: ['City', 'Man-made', 'Green', 'America', 'Modern', 'Nature'],
    image: './Images/CentralPark.png'
  },
  {
    name: "Golden Gate Bridge",
    location: "California, U.S.A.",
    tags: ['Historic', 'City', 'Man-made', 'America', 'Architecture', 'Water', 'Modern'],
    image: './Images/GoldenGateBridge.png'
  },
  {
    name: "Grand Canyon",
    location: "Arizona, U.S.A.",
    tags: ['Mountains', 'Nature', 'America', 'National Park'],
    image: './Images/GrandCanyon.png'
  },
  {
    name: "Redwood Forest",
    location: "California, U.S.A.",
    tags: ['Nature', 'Green', 'America', 'National Park'],
    image: './Images/RedwoodForest.png'
  },
  {
    name: "Zion National Park",
    location: "Utah, U.S.A.",
    tags: ['Nature', 'Mountains', 'America', 'National Park'],
    image: './Images/Zion.png'
  },
  {
    name: "Bryce Canyon National Park",
    location: "Utah, U.S.A.",
    tags: ['Nature', 'Mountains', 'America', 'National Park'],
    image: './Images/BryceCanyon.png'
  },
  {
    name: "Antelope Canyon",
    location: "Arizona, U.S.A.",
    tags: ['Nature', 'America', 'National Park'],
    image: './Images/AntelopeCanyon.png'
  },
  {
    name: "Great Barrier Reef",
    location: "Australia",
    tags: ['Beach', 'Nature', 'Green', 'Garden', 'Water'],
    image: './Images/GreatBarrierReef.png'
  },
  {
    name: "Bora Bora",
    location: "French Polynesia",
    tags: ['Beach', 'Nature', 'Green', 'Asia', 'Resort', 'Water'],
    image: './Images/BoraBora.png'
  },
  {
    name: "Glacier National Park",
    location: "Montana, U.S.A.",
    tags: ['Mountains', 'Nature', 'Green', 'America', 'National Park'],
    image: './Images/Glacier.png'
  },
  {
    name: "Great Canal",
    location: "Venice, Italy",
    tags: ['Historic', 'City', 'Man-made', 'Europe', 'Water', 'Modern'],
    image: './Images/GreatCanal.png'
  },
  {
    name: "Tivoli Gardens",
    location: "Copenhagen, Denmark",
    tags: ['Nature', 'Green', 'Europe', 'Garden', 'Modern'],
    image: './Images/TivoliGardens.png'
  },
  {
    name: "Nyhavn",
    location: "Copenhagen, Denmark",
    tags: ['City', 'Man-made', 'Europe', 'Water', 'Modern'],
    image: './Images/Nyhavn.png'
  },
  {
    name: "Charles Bridge",
    location: "Prague, Czechia",
    tags: ['Historic', 'City', 'Europe', 'Man-made', 'Architecture'],
    image: './Images/CharlesBridge.png'
  },
  {
    name: "Parliament",
    location: "London, England",
    tags: ['City', 'Historic', 'Man-made', 'Europe', 'Architecture'],
    image: './Images/Parliament.png'
  },
  {
    name: "Santorini",
    location: "Greece",
    tags: ['Beach', 'City', 'Man-made', 'Water', 'Resort', 'Europe'],
    image: './Images/Santorini.png'
  },
  {
    name: "Amalfi Coast",
    location: "Italy",
    tags: ['Beach', 'Water', 'Europe', 'Green', 'Garden'],
    image: './Images/AmalfiCoast.png'
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    tags: ['Mountains', 'Nature', 'Green', 'Europe', 'National Park'],
    image: './Images/SwissAlps.png'
  },
  {
    name: "St. Steven's Cathedral",
    location: "Vienna, Austria",
    tags: ['Historic', 'Man-made', 'Religious', 'Europe', 'Architecture'],
    image: './Images/StStevensCathedral.png'
  },
  {
    name: "The Hofburg",
    location: "Vienna, Austria",
    tags: ['Historic', 'Man-made', 'Europe', 'Architecture', 'Museum'],
    image: './Images/Hofburg.png'
  },
  {
    name: "São Miguel",
    location: "Azores, Portugal",
    tags: ['Beach', 'Mountains', 'Nature', 'Green', 'Europe', 'Garden', 'Resort', 'Water'],
    image: './Images/SaoMiguel.png'
  },
  {
    name: "Marienplatz",
    location: "Munich, Germany",
    tags: ['Historic', 'Man-made', 'Europe', 'Architecture'],
    image: './Images/Marienplatz.png'
  },
  {
    name: "Hagia Sophia",
    location: "Istanbul, Turkey",
    tags: ['Historic', 'Man-made', 'Religious', 'Architecture'],
    image: './Images/HagiaSophia.png'
  },
  {
    name: "Pamukkale",
    location: "Turkey",
    tags: ['Nature', 'National Park', 'Resort', 'Water'],
    image: './Images/Pamukkale.png'
  },
  {
    name: "Grand Bazaar",
    location: "Istanbul, Turkey",
    tags: ['City', 'Man-made', 'Market', 'Modern'],
    image: './Images/GrandBazaar.png'
  },
  {
    name: "Lotus Temple",
    location: "New Delhi, India",
    tags: ['Temple', 'Man-made', 'Religious', 'Asia', 'Architecture', 'Modern'],
    image: './Images/LotusTemple.png'
  },
  {
    name: "Shrine of the Báb",
    location: "Haifa, Israel",
    tags: ['Temple', 'Man-made', 'Religious', 'Architecture', 'Green', 'Garden'],
    image: './Images/ShrineOfTheBab.png'
  },
  {
    name: "Tiger's Nest Temple",
    location: "Bhutan",
    tags: ['Mountains', 'Nature', 'Temple', 'Man-made', 'Religious', 'Asia'],
    image: './Images/TigersNestTemple.png'
  },
  {
    name: "Siem Reap",
    location: "Cambodia",
    tags: ['Ancient', 'Temple', 'Man-made', 'Green', 'Asia', 'Museum'],
    image: './Images/SiemReap.png'
  },
  {
    name: "Bokeo Nature Reserve",
    location: "Laos",
    tags: ['Nature', 'Green', 'Asia', 'Garden', 'National Park'],
    image: './Images/BokeoNaturalReserve.png'
  },
  {
    name: "Petronas Towers",
    location: "Kuala Lumpur, Malaysia",
    tags: ['City', 'Man-made', 'Asia', 'Architecture', 'Modern'],
    image: './Images/PetronasTowers.png'
  },
  {
    name: "Ha Long Bay",
    location: "Vietnam",
    tags: ['Beach', 'Mountains', 'Nature', 'Green', 'Asia', 'Water'],
    image: './Images/HaLongBay.png'
  },
  {
    name: "Danxia Landform",
    location: "China",
    tags: ['Mountains', 'Nature', 'Asia', 'National Park', 'National Park'],
    image: './Images/DanxiaLandform.png'
  },
  {
    name: "Rainbow Family Village",
    location: "Taiwan",
    tags: ['City', 'Man-made', 'Asia', 'Market', 'Modern'],
    image: './Images/RainbowFamilyVillage.png'
  },
  {
    name: "Shinjuku Gyoen",
    location: "Tokyo, Japan",
    tags: ['Nature', 'Green', 'Asia', 'Garden'],
    image: './Images/ShinjukuGyoen.png'
  },
  {
    name: "Bali",
    location: "Indonesia",
    tags: ['Nature', 'Green', 'Mountains', 'Water', 'Historic', 'Asia'],
    image: './Images/Bali.png'
  },
  {
    name: "Green Tea Plantation",
    location: "Daehan Dawon, South Korea",
    tags: ['Mountains', 'Nature', 'Man-made', 'Green', 'Asia', 'Garden'],
    image: './Images/GreenTeaPlantation.png'
  },
  {
    name: "Mekong Delta",
    location: "Vietnam",
    tags: ['Nature', 'Historic', 'Asia', 'Green', 'Water'],
    image: './Images/MekongDelta.png'
  },
  {
    name: "Rice Terraces",
    location: "Banaue, Philippines",
    tags: ['Mountains', 'Nature', 'Man-made', 'Green', 'Asia', 'Garden'],
    image: './Images/RiceTerraces.png'
  },
  {
    name: "Shwedagon Pagoda",
    location: "Myanmar",
    tags: ['Historic', 'Temple', 'Man-made', 'Religious', 'Asia', 'Architecture'],
    image: './Images/ShwedagonPagoda.png'
  },
  {
    name: "Buddhist Temples",
    location: "Bagan, Myanmar",
    tags: ['Nature', 'Ancient', 'Temple', 'Religious', 'Asia', 'Man-made', 'Museum', 'Architecture'],
    image: './Images/BuddhistTemples.png'
  },
  {
    name: "Krabi Province",
    location: "Thailand",
    tags: ['Beach', 'Nature', 'Green', 'Asia', 'Resort', 'Water'],
    image: './Images/KrabiProvince.png'
  },
  {
    name: "Fushimi Inari Shrine",
    location: "Kyoto, Japan",
    tags: ['Mountains', 'Historic', 'Man-made', 'Temple', 'Religious', 'Asia', 'Architecture'],
    image: './Images/FushimiInariShrine.png'
  },
  {
    name: "Arashiyama",
    location: "Kyoto, Japan",
    tags: ['Nature', 'Temple', 'Green', 'Asia', 'Garden', 'National Park'],
    image: './Images/Arashiyama.png'
  },
  {
    name: "Na Pali Coast",
    location: "Hawaii, U.S.A.",
    tags: ['Beach', 'Mountains', 'Nature', 'Green', 'America', 'National Park', 'Water'],
    image: './Images/NaPaliCoast.png'
  },
  {
    name: "Volcanoes National Park",
    location: "Hawaii, U.S.A.",
    tags: ['Mountains', 'Nature', 'America', 'National Park', 'Water'],
    image: './Images/Volcanoes.png'
  }

]

module.exports.places = places;