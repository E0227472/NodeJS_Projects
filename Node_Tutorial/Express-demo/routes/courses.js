// import joi packages 
const Joi = require('@hapi/joi');

// importing the express module and using the CRUD operations in express()
const express = require('express'); 
const router = express.Router();

// refactoring validation into a single method 
function validateCourse (req) {
// schema should have exactly the same shape as the course object  
const schema = {
    name: Joi.string().min(3).required()
};

// compare both the schema and the course object 
const {error} =  Joi.validate(req.body, schema);

 return error;
};

// sample json data
 const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
]

// get - with array return type 
router.get('/', (req, res) => {
    res.send(courses);
});


// adding route parameters - adding multiple params 
router.get('/:year/:month', (req, res) => {
   // res.send(req.params); // => get the params from the url 
    res.send(req.query); // => getting the message from ? in url
})

// getting course from a single id 
// adding route parameters - adding multiple params 
router.get('/:id', (req, res) => {
    // res.send(req.params); // => get the params from the url 
    const course = courses.find(cour => 
        // req.params.id  returns a string 
         cour.id === parseInt (req.params.id)
    );

     if(!course) return res.status(404).send('Course not found');
     
     res.send(course); // => getting the message from ? in url
 });

 // get - with array return type 
router.get('/', (req, res) => {
    res.send(courses);
});

// Http - post request (without database method)
router.post('/', (req,res) => {
// validate 
 const error = validateCourse(req);
if (error)
    return res.status(404).send(error.details[0].message);

    // create a new sample object - name property obtained externally 
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course); 
});

// http - put request 
router.put('/:id', (req, res) => {
    // check to see if the object exists in the database based on the id
    const course  = courses.find(c => c.id === parseInt(req.params.id));

    // if doesn't exist, return status error code, exit function
    if (!course) return res.status(404).send('The course with the given id does not exist');

   // validate the input type - exist code block
 const error = validateCourse(req);
 if (error) 
     return res.status(404).send(error.details[0].message);

     // update the course - arrays are updated by reference 
     course.name = req.body.name;
     res.send(course);
});

// delete a course 
router.delete('/:id', (req, res) => {
// check if the course exists based on the given id 
// check to see if the object exists in the database based on the id
const course  = courses.find(c => c.id === parseInt(req.params.id));

// if doesn't exist, return status error code 
if (!course) return res.status(404).send('The course with the given id does not exist');

// delete the course from the array based on the index given
const index = courses.indexOf(course);
courses.splice(index, 1);

res.send(`${course.name} is deleted `);

});
// export all the router functions 
module.exports = router;