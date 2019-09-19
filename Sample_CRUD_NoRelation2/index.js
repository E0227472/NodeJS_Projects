// import mongoose
const mongoose = require('mongoose');

// importing the express module and using the CRUD operations in express()
const express = require('express');

const app = express();
app.use(express.json());
// debugger messages - to use the debugger package
const dbDebugger = require('debug')('app:db');

// import the courses router
const genres = require('./routes/genres');

// router set- up, set the base url
// parameters (baseurl, router crud operations);
app.use('/api/genres', genres);

// references the mongodb connected to the local machine
// .connect returns a promise
mongoose
  .connect('mongodb://localhost/vidly')
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));

// In real world applications, port number will be obtained externally.
const port = process.env.Port || 3000;
// pass port number to start application
app.listen(port, () => console.log(`listening to ${port}`));
