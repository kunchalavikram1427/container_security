const express = require('express');

// Set Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Initialize App
const app = express();

// Create GET endpoint
app.get('/', (req, res) => {
  res.send('Hello there!, Welcome to DevOps Made Easy');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
