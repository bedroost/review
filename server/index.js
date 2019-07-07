/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const db = require('./db/index');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:listingid/reviews', (req, res) => {
  // sample id = '5d2129c87e30c5c054ee06f7';
  const id = req.params.listingid;
  db.Listing.findById(id, (err, listing) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(listing);
    }
  });
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
