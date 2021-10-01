const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./confjg');
const bodyParser = require('body-parser');
const customerRoutes = require('../routes/customerRoutes');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', customerRoutes.routes);
// This displays message that the server running and listening to specified port
app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
