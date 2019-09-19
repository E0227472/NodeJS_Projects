// import mongoose
const mongoose = require('mongoose');

// creating a database schema
// specfying the data types in JSON format
const genreSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 }, // indicating required field
});

// model creates the Genre Class.
const Genre = mongoose.model('Genre', genreSchema);

// get all genres from database
async function GetGenres() {
  // getting all the courses where the author is 'San' => equivalent to where in sql
  const genres = await Genre.find().sort({ name: 1 }); // sort in ascending order => 1
  return genres;
}

// post a genre to the database
async function CreateGenre(body) {
  // create one model based on the Course Object
  const genre = new Genre(body);

  // save the course object to database and automatically create a unique id
  const result = await genre.save();
  return result;
}

// update genre in the database
async function UpdateCourse(id, req) {
  // getting all the courses where the author is 'San' => equivalent to where in sql
  const result = await Genre.findByIdAndUpdate(
    id,
    {
      $set: {
        name: req.name,
      },
    },
    { new: true }
  );
  return result;
}

// deleting a genre object - document object
async function DeleteGenre(id) {
  // getting all the courses where the author is 'San' => equivalent to where in sql
  const result = await Genre.findByIdAndRemove(id);
  return result;
}

module.exports = {
  GetGenres,
  CreateGenre,
  UpdateCourse,
  DeleteGenre,
};
