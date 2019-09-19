const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const movie = require('../models/movie');

// get all the movie objects from the database
router.get('/', async (req, res) => {
  const { Movie } = movie; // get the movie class
  const movies = await Movie.find().sort('name');
  res.send(movies);
  console.log(movies);
});

// post a movie object
router.post('/', async (req, res) => {
  const { ValidateMovie, CreateMovie } = movie;
  const { error } = ValidateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const result = CreateMovie(req.body);
  result
    .then(output => {
      console.log(output);
      res.send(output);
    })
    .catch(err => {
      console.log(err);
    });
});

// update the movie object or Genre object
router.put('/:id', async (req, res) => {
  const { Movie, ValidateMovie, UpdateMovie } = movie;
  const { error } = ValidateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const result = UpdateMovie(req.params.id, req.body);
  result
    .then(output => {
      console.log(output);
      res.send(output);
    })
    .then(err => {
      console.log(err);
    });
});

// delete the movie object
router.delete('/:id', async (req, res) => {
  const { Movie } = movie;
  const mov = await Movie.findByIdAndRemove(req.params.id);

  if (!mov)
    return res
      .status(404)
      .send('The customer with the given ID was not found.');

  res.send(mov);
});

// router.get('/:id', async (req, res) => {
//   const customer = await Customer.findById(req.params.id);

//   if (!customer)
//     return res
//       .status(404)
//       .send('The customer with the given ID was not found.');

//   res.send(customer);
// });

module.exports = router;
