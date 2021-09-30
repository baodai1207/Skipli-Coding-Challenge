const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // middleware

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
