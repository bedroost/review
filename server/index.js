/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const db = require('./db');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/:listingid/reviews', (req, res) => {
  res.send(`Hello from port ${port}`);
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
