// import joi packages
const Joi = require('@hapi/joi');

// import express
// importing the express module and using the CRUD operations in express()
const express = require('express');

const router = express.Router();

// import mongoose
const mongoose = require('mongoose');

// import genreMongo
const gen = require('../mongodb/genresMongo');

// creating a database schema
// specfying the data types in JSON format
const genreSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 }, // indicating required field
});

// validate reqBody object using Joi
function Validate(req) {
  // schema should have exactly the same shape as the course object
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
  };
  // compare both the schema and the course object
  const { error } = Joi.validate(req.body, schema);
  return error;
}

// get all genres
router.get('/', (req, res) => {
  const genres = gen.GetGenres();
  genres
    .then(genre => {
      console.log(genre);
      res.send(genre);
    })
    .catch(err => {
      console.log(err);
    });
});

// Http - post request (without database method)
router.post('/', (req, res) => {
  // validate
  const error = Validate(req);
  if (error) return res.status(404).send(error.details[0].message);

  const result = gen.CreateGenre(req.body);
  result
    .then(output => {
      console.log(output);
      res.send(output);
    })
    .catch(err => {
      console.log(err);
    });
});

// http - put request
router.put('/:id', (req, res) => {
  // check to see if the object exists in the database based on the id
  const genre = gen.UpdateCourse(req.params.id, req.body);

  // if doesn't exist, return status error code, exit function
  if (!genre)
    return res.status(404).send('The course with the given id does not exist');

  // validate the input type - exist code block
  const error = Validate(req);
  if (error) return res.status(404).send(error.details[0].message);

  // send the success addition or if failed return error
  genre
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// delete a Genre
router.delete('/:id', (req, res) => {
  // check if the course exists based on the given id
  const genre = gen.DeleteGenre(req.params.id);

  // if doesn't exist, return status error code
  if (!genre)
    return res.status(404).send('The course with the given id does not exist');

  genre
    .then(result => {
      console.log('result successfully deleted');
    })
    .then(err => {
      console.log(err);
    });
});
// export all the router functions
module.exports = router;
