# Bedroost

* Application to explore guest reviews for home-stay accommodations


## Demo
![bedroost-review-demo](https://gfycat.com/thornydisastrousislandcanary.gif)

<div><div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 115.469%;"><video loop="" muted="" webkit-playsinline="" autoplay="" poster="https://thumbs.gfycat.com/ThornyDisastrousIslandcanary-mobile.jpg" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;">Your browser does not support HTML5 video.<source src="https://thumbs.gfycat.com/ThornyDisastrousIslandcanary-mobile.mp4" type="video/mp4"></video></div></div>

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

# run the app!
npm start
```

## Related Projects
- https://github.com/bedroost/gallery
- https://github.com/bedroost/booking
- https://github.com/bedroost/booking
