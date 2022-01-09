const express = require('express');
const app = express();

// Importing Routes
const empRoutes = require('./routes/empRoutes');

app.use(express.json()); // this requires for parsing post requests. it is not required in GET request.

app.use('/api/v1', empRoutes);

module.exports = app;
