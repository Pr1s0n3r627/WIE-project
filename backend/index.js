const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
