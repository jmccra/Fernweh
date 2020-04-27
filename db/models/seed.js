const { places } = require('./places')
const mongoose = require('mongoose');

const { Schema } = mongoose;

const placeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  tags: Array,
  location: String,
  image: String
});

let Place = mongoose.model("Place", placeSchema);

const seed = async () => {
  await Place.insertMany(places, {
    bypassDocumentValidation: true,
    ordered: false
  })
  console.log('database seeded')
}

module.exports.seed = seed;