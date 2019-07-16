/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3004;
const db = require('./db/index');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/rooms/:listingid', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:listingid/reviews', (req, res) => {
  console.log('req.params: ', req.params);
  console.log('req.params.listingid', req.params.listingid);

  db.Listing.find(
    { listingid: req.params.listingid },
    (err, listing) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(listing);
      }
    },
  );
});

app.listen(port, () => {
  console.log(`reviews-express listening on port ${port}`);
});
