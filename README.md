# Bedroost
* Application to explore ratings and reviews for home-stay accommodations


## Demo
![bedroost-review-demo](https://i.imgur.com/Lcb7ZKp.gifv)
<iframe src='https://gfycat.com/ifr/AppropriateAmazingCopperhead' frameborder='0' scrolling='no' allowfullscreen width='640' height='783'></iframe>
![2014-10-22 11_35_09](https://cloud.githubusercontent.com/assets/39191/4741874/9890757a-5a1a-11e4-9a71-3f64bd66b7ab.gif)


## Features
* Displays summary of reviews and ratings for a given accomodation. View total number of reviews, ratings for 6 individual categories, and overall rating that is accurate to the average ratings of 6 given categories.

* Each individual review includes profile picture, name, timestamp, and text content. Some reviews may include a host response. All guest reviews and host responses are displayed in descending chronological order. 

* Users can paginate through the full list of reviews, 7 at a time, using navigation buttons at the base of the page.

* Users can search reviews and paginate through results as well.


## Usage

```
# clone this repository
git clone https://github.com/bedroost/review.git

# install dependencies
npm install

# seed mongo database
npm run seed

# build webpack bundle
npm run build

# run the app
npm start
```


## Related Projects
- https://github.com/bedroost/gallery
- https://github.com/bedroost/booking
- https://github.com/bedroost/description
