/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3004;
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');
const db = require('./db/index');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/rooms/:listingid', express.static(path.join(__dirname, '../client/dist')));
// const pathtest = path.join(__dirname, '..', 'client', 'dist');
// app.use('/rooms/:listingid', expressStaticGzip(path.join(__dirname, 'client', 'dist'), {
//   enableBrotli: true,
//   orderPreference: ['br', 'gz'],
//   setHeaders: (res) => {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   },
// }));

app.get('/api/:listingid/reviews', cors(), (req, res) => {
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
