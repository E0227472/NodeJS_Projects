const mongoose = require('mongoose');
const express = require('express');
const movie = require('./routes/movieRoute');

const app = express();

mongoose
  .connect('mongodb://localhost/Embed_Movie')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/movies', movie);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
