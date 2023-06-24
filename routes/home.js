const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // Render the App component as a response
  res.sendFile(path.join(__dirname, '../src/pages/Home.js'));
});

module.exports = router;
