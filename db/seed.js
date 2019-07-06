/* eslint-disable max-len */
/* eslint-disable camelcase */
const faker = require('faker');
const db = require('./index');

// helper function to make a new Listing instance
const listingMaker = (ratings, reviews) => (
  new db.Listing({ ratings, reviews })
);

for (let i = 0; i < 1; i += 1) {
  // use faker to make random values to assign to schema properties:
  // each listing will have same username, date, text, avatar, response_username, response_avatar...variance will be in reviews array.
  const numReviews = faker.random.number({ min: 5, max: 150 });
  const accuracy = faker.random.number({ min: 1, max: 5 });
  const communication = faker.random.number({ min: 1, max: 5 });
  const cleanliness = faker.random.number({ min: 1, max: 5 });
  const location = faker.random.number({ min: 1, max: 5 });
  const check_in = faker.random.number({ min: 1, max: 5 });
  const value = faker.random.number({ min: 1, max: 5 });
  const overall = Math.round((accuracy + communication + cleanliness + location + check_in + value) / 6);
  const response_username = faker.name.firstName();
  const response_avatar = faker.internet.avatar();

  // create ratings object
  const ratings = {};
  ratings.overall = overall;
  ratings.accuracy = accuracy;
  ratings.communication = communication;
  ratings.cleanliness = cleanliness;
  ratings.location = location;
  ratings.check_in = check_in;
  ratings.value = value;

  // create reviews array. Number of reviews determined by random
  // number above. Each review made will be pushed into reviews array
  const reviews = [];
  for (let j = 0; j < numReviews; j += 1) {
    // generate new data for a new review object
    const created_at = faker.date.past();
    const text = faker.lorem.paragraph();
    const username = faker.name.firstName();
    const avatar = faker.internet.avatar();
    const response_text = faker.lorem.sentence();

    // new review object to populate
    const review = {};

    // random number to determine if this review has a response
    const random_hasResponse = faker.random.number({ min: 0, max: 100 });

    // if random number is divisible by 3, review object WILL have a response. if not, the review object will NOT have a response
    if (random_hasResponse % 3 === 0) {
      // add data from above to populate the new review object
      review.created_at = created_at;
      review.text = text;
      review.username = username;
      review.avatar = avatar;
      review.response_username = response_username;
      review.response_avatar = response_avatar;
      review.response_text = response_text;
    } else {
      review.created_at = created_at;
      review.text = text;
      review.username = username;
      review.avatar = avatar;
    }

    // add the newly created review into the reviews object
    reviews.push(review);
  }
  // pass in ratings object and reviews array into the new Listing instance
  const newListing = listingMaker(ratings, reviews);
  console.log(newListing);

  // listing.save callback
}
