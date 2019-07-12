const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/airbnb', {
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

/* SAMPLE INSTANCE OF MODEL 'LISTING'
// sample instance of model Listing
const listing1 = new Listing({
  ratings: {
    overall: 5,
    accuracy: 5,
    communication: 5,
    cleanliness: 5,
    location: 5,
    check_in: 5,
    value: 5,
  },

  reviews: [
    {
      created_at: 'Sat Jan 18 2019 00:08:21 GMT-0700 (PDT)',
      text: 'review review review review',
      username: 'Bugs',
      avatar: 'www.img.com',
      response_username: 'Porky',
      response_avatar: 'www.img.com',
      response_text: 'That\'s all folks',
    },
    {
      created_at: 'Sat Jan 01 2018 00:08:21 GMT-0700 (PDT)',
      text: 'review review review review',
      username: 'Daffy',
      avatar: 'www.img.com',
      response_username: null,
      response_avatar: null,
      response_text: null,
    }],
});

// test to save the new model instance
listing1.save((err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('listing was saved');
});
*/

module.exports = { db, Listing };
