const mongoose = require('mongoose');
// references the mongodb connected to the local machine 
//.connect returns a promise 
mongoose.connect('mongodb://localhost/playground')
.then(() => console.log("connected to database"))
.catch((err) => console.log(err));

// creating a database schema 
// specfying the data types in JSON format
const courseSchema =  new mongoose.Schema({
name: {type: String, required: true}, // indicating required field  
author: String, 
tags: [String], // array of Strings 
date: {type: Date, default: Date.now}, // default value of the property is Date.now
isPublished: Boolean
});

// model creates the Course Class. 
const Course = mongoose.model('Course', courseSchema);

// async function CreateCourse() {
// // create one model based on the Course Object 
// const course = new Course({
//     name: 1, 
//     author: 'San', 
//     tags: ['Angular', 'front-end'],
//     isPublished: true
// });
// try {
// // save the course object to database and automatically create a unique id
// const result = await course.save();
// console.log(result);
// } catch (err) {
// console.log(err);}
// }

// CreateCourse();

// // retrieve all the course objects from the mongodb database 
// async function GetCourse() {
// // getting all the courses where the author is 'San' => equivalent to where in sql 
// const courses  = await Course
// .find({author: 'San'})
// .limit(10) // limit maximum object return to 10
// .sort({name: 1}) // sort in ascending order => 1
// .select({name: 1, tags: 1}); // get only name and tags property 
// console.log(courses);
// }

//GetCourse();


// // retrieve all the course objects from the mongodb database 
// async function GetCourse() {
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const courses  = await Course
//     .find()
//     // getting all objects that are either author = 'San' or isPublished = true
//     .or([{author: 'San'}, {isPublished: true}]) 
//     // getting all objects that are both author = 'San' and isPublished = true 
//     .and([{author: 'San'}, {isPublished: true}])
//     console.log(courses);
//     }

// // retrieving the count of the database documents 
// async function GetCourse() {
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const courses  = await Course
//     .find()
//     // getting all objects that are either author = 'San' or isPublished = true
//     .or([{author: 'San'}, {isPublished: true}]) 
//     // getting all objects that are both author = 'San' and isPublished = true 
//     .and([{author: 'San'}, {isPublished: true}])
//     .count(); // getting the count of the number of documents returned 
//     console.log(courses);
//     }

// // retrieving the documents within a given page  
// async function GetCourse() {
//     const pageNumber = 2;
//     const pageSize = 10;
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const courses  = await Course
//     .find()
//     .skip((pageNumber-1) * pageSize)
//     // getting all objects that are either author = 'San' or isPublished = true
//     .or([{author: 'San'}, {isPublished: true}]) 
//     // getting all objects that are both author = 'San' and isPublished = true 
//     .and([{author: 'San'}, {isPublished: true}]); 
//     console.log(courses);
//     }

// // updating a course object - document object  
// async function UpdateCourse(id) {
   
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const course  = await Course.findById(id);
//     if(!course) return;

//     course.isPublished = true;
//     course.author = 'New Author Name ';
//     course.name = "Mindfulness Course"
//    const result = await course.save();
//    console.log(result);
// }

// // updating a course object - document object  
// async function UpdateCourse(id) {
   
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const result  = await Course.findByIdAndUpdate(id, {
//         $set: {
//             author: 'Mosh', 
//             name: 'Bad Course'
//         }
//     }, {new: true});
//    console.log(result);
// }

// UpdateCourse("5d7f58d5b0af5fdebafd19c0");

// deleting a course object - document object  
// async function DeleteCourse(id) {
//     // getting all the courses where the author is 'San' => equivalent to where in sql 
//     const result  = await Course.findByIdAndRemove(id)
//    console.log(result);
// }

// DeleteCourse("5d7f58d5b0af5fdebafd19c0");