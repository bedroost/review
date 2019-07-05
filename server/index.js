const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/listing/', (req, res) => {
  // console.log(req);
  res.send(`Hello from port ${port}`);
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
