const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
