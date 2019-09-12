// import the express package 
const express = require('express');
const app = express();

// import genres from genres.js
const genres = require('./genres');
console.log(genres);
// import joi packages 
const Joi = require('@hapi/joi');

// handles all incoming / outgoing data and handles them in JSON format
app.use(express.json());

// validate the genre object 
function validateGenres (req) {
    const schema = {
        name: Joi.string().required()
    }

   const {error} = Joi.validate(req.body, schema);

   return error;

}

// get all movie genres 
app.get('/api/genres', (req, res) => {
    res.send(genres);
});

// get genre based on id
app.get('/api/genres/:id', (req, res) => {
    // check if the genre exists based on given id
    const genre = genres.find(g => g._id === parseInt (req.params.id));
    if(!genre) return res.status(404).send("Genre does not exist");

    res.send(genre.name);
})

// post genre 
app.post('/api/genres', (req, res) => {
    // check if the genre exists based on given_id
    const gen = genres.find(g => g.name === req.body.name);
    if(gen) return res.status(400).send("Genre already exists");

    // validate the name input 
    const error = validateGenres(req);

    if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        _id: genres.length +1,
        name: req.body.name
    }

    genres.push(genre);
    res.send(genre);
})

// put request 
app.put('/api/genres/:id', (req, res) => {
    // check if the genre exists based on given_id
    const gen = genres.find(g => g._id === parseInt(req.params.id));
    if(!gen) return res.status(404).send("Genre does not exist");

    // validate the name input 
    const error = validateGenres(req);
    if(error) return res.status(400).send(error.details[0].message);

    gen.name = req.body.name;

    res.send(gen);
})

//delete request 
app.delete('/api/genres/:id', (req, res) => {
    // check if the genre exists based on given_id
    const gen = genres.find(g => g._id === parseInt(req.params.id));
    if(!gen) return res.status(404).send("Genre does not exist");

   

   const index = genres.indexOf(gen);
   genres.splice(index, 1);
  res.send(`${gen.name} has been deleted`);
})


const port = process.env.port || 3000;

app.listen(port, () => console.log("listening to port"));