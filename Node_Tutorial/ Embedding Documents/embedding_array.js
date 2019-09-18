const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  // 1 course has many authors 
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String, 
  authors: [authorSchema] // Course class contains author object 
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors // author array
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// modify the author object through the courseId
async function updateAuthor(courseId) {
  // get the course object and modify the author name 
  const course = await Course.findByIdAndUpdate({_id: courseId}, {
    $set: {
      'author.name': 'John' // modify the author's name property 
    }
  })

  course.save();
}

//updateAuthor('5d81f97009ed1c6556ab9c3c');

// createCourse('Node Course', [
// new Author({ name: 'Mosh' }),
// new Author({name: 'San'})
// ]);

// adding new author object 
async function addAuthor(courseId, author) {
const course = await Course.findById(courseId);
course.authors.push(author); // add the author object into the array
course.save();
}

// removing author object 
async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId); // getting the author object
    author.remove();
    course.save(); 
}

//addAuthor("5d81ff0b2cdc366d80687229", new Author({ name: 'Mosh' }));

removeAuthor("5d81ff0b2cdc366d80687229" , "5d82002128cbaf6f7839c647");
