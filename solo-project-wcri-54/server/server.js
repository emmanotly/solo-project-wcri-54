const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

// require mongoose
const mongoose = require('mongoose');
// require .env and create the path to accesss the actual database
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.use(express.json());
app.use(express.urlencoded());

// create a path to the database
const DB = process.env.DATABASE;

// connect mongoose to the database
mongoose.connect(DB).then(() => {
  console.log('Database is connected');
});

// require the path to the index.html
/*  app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
}); */

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

// const db = 'mongodb+srv://emma54:expressjs@solo-project.eeaoyio.mongodb.net/?retryWrites=true&w=majority'


// add listener
app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});

// export app
module.exports = app;