const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/review', {
  useCreateIndex: true, // use .createIndex instead of .ensureIndex. Removes deprecation warning
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: Number,
    unique: true,
  },
  listing_id: Number,
  text: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  user_id: Number,
  user_name: String,
  user_avatar_url: String,
  response_username: String,
  response_avatar_url: String,
  response_text: String,
  response_created_at: Date,
});

const Review = mongoose.model('Review', reviewSchema);

// sample instance of model Review
const testReview = new Review({
  review_id: 2,
  listing_id: 10,
  text: 'newReview',
  created_at: '2019-05-18T16:00:00Z',

  user_id: 1,
  user_name: 'newUser',
  user_avatar_url: 'https://www.blurb.com',
  response_username: 'String',
  response_avatar_url: 'String',
  response_text: 'String',
  response_created_at: '2016-05-18T16:00:00Z',
});

// test to save the new model instance
testReview.save((err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('testReview saved');
});

module.exports = db;
