// importing the express module and using the CRUD operations in express()
const express = require('express');
const config = require('config');
// debugger messages - to use the debugger package 
const dbDebugger = require('debug')('app:db');
// importing the middlewear
const log = require('./logger')
// import the courses router 
const courses = require('./routes/courses');
const app = express();

// all messages stored in the debugger
dbDebugger('Connected to the database...');


// create the view engines 
app.set('view engine', 'pug');
// create the views 
app.set('views', './views');

app.use(express.json());

console.log(app.get('env'));

// if development env is development, config.get('name') will return development 
console.log(config.get('name'));

// creating custom middlewear function 
// middlewear functions are external functions 
app.use(log);

// router set- up, set the base url 
// parameters (baseurl, router crud operations);
app.use('/api/courses', courses);



// In real world applications, port number will be obtained externally. 
const port  = process.env.Port || 3000
// pass port number to start application 
app.listen(port, () => console.log( `listening to ${port}`));
