const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

// connect a database

// require paths to my middleware

// define routers for middleware
// ('/endpoint', middleware, response)

// catch all router
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

