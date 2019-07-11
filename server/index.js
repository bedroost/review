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
app.use('/rooms', express.static(path.join(__dirname, '../client/dist')));

app.get('/rooms/:listingid', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Sent: index.html');
    }
  });
});


app.get('/api/:listingid/reviews', (req, res) => {
  console.log('req.params: ', req.params);
  console.log('req.params.listingid', req.params.listingid);

  db.Listing.find(
    { listingid: req.params.listingid },
    { reviews: { $slice: [0, 7] } },
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
  console.log(`Express listening on port ${port}`);
});
