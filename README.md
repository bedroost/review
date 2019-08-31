# Bedroost
Reviews and ratings microservice built for a home-sharing application

![bedroost-review-demo](https://thumbs.gfycat.com/AppropriateAmazingCopperhead-size_restricted.gif)


## Features
* Displays overview of reviews and ratings for a given home-sharing accomodation. View total number of reviews, ratings for 6 individual categories, and an overall rating that is accurate to the average ratings of provided categories.
* Each individual review includes profile picture, name, timestamp, and review content. Some reviews may include a host response. All guest reviews and host responses are displayed in descending chronological order. 
* Users can paginate through the full list of reviews using navigation buttons at the base of the page.
* Users can search reviews and paginate through search results as well.

## Tech Stack
* Frontend: JavaScript, React, Webpack
* Backend: Node.js, Express, Docker, AWS EC2
* Database: MongoDB, Mongoose
* Testing: Jest, Enzyme

## Usage

```
# clone this repository
git clone https://github.com/bedroost/review.git

# install dependencies
npm install

# seed mongo database
npm run seed

# build webpack bundle
npm run build:prod

# run the app
npm start
```

## Related Projects
* https://github.com/bedroost/gallery
* https://github.com/bedroost/booking
* https://github.com/bedroost/description
