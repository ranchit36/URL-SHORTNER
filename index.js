const express = require('express');
require('./connect'); // Connect to MongoDB
const urlRoutes = require('./routes/url');

const app = express();
app.use(express.json());
app.use('/', urlRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});