const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

// create a genre schema to pass as object reference in Movie class
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
});

// Movie object with genre object embedded
const Movie = mongoose.model(
  'Movie',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    numberInStock: {
      type: Number,
      required: true,
    },
    dailyRentalRate: {
      type: Number,
      required: true,
    },
    genres: [genreSchema],
  })
);

// validate movie input from front-end => comparing movie object with schema
function ValidateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required(),
    genres: Joi.array().items(
      Joi.object({
        // Object schema
        name: Joi.string()
          .min(5)
          .max(50)
          .required(),
      })
    ),
  };
  return Joi.validate(movie, schema);
}

// create new movie object
async function CreateMovie(movie) {
  const mov = new Movie(movie);
  const result = await mov.save();
  return result;
}

// create new genre object under movie object
async function UpdateMovie(id, movie) {
  const mov = await Movie.findById(id);
  mov.genres = movie.genres;
  const result = mov.save();
  return result;
}

module.exports = {
  ValidateMovie,
  CreateMovie,
  UpdateMovie,
  Movie,
};
