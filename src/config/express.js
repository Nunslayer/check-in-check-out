const express = require('express');
const { registrationsRouter } = require('../routes/registrations.routes');

const app = express();

app.use(express.json());
app.use(express.text());

//Routes
app.use('/api/v1/registrations', registrationsRouter);

//Error handler
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'not found',
    message: 'We dont have that url services',
  });
});

module.exports = { app };
