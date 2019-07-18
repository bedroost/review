const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/airbnb', {
mongoose.connect('mongodb://172.17.0.2:27017/airbnb', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

// create reference to schema
// child
const reviewSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  text: String,
  username: String,
  avatar: String,
  hasResponse: Boolean,
  response_username: String,
  response_avatar: String,
  response_text: String,
  response_created_at: Date,
});

// parent
const listingSchema = new mongoose.Schema({
  listingid: Number,
  ratings: {
    overall: Number,
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    check_in: Number,
    value: Number,
  },
  numReviews: Number,
  reviews: [reviewSchema],
});

// compile schema into a model
const Listing = mongoose.model('Listing', listingSchema);

module.exports = { db, Listing };
