const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware to parse JSON body
app.use(bodyParser.json());

// Unique route for webhook
app.post('/webhook', (req, res) => {
  // Handle webhook logic here
  console.log('Received webhook payload:', req.body);
  res.status(200).send('Webhook received successfully.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
