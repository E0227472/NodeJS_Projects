const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String, 
  author: authorSchema // Course class contains author object 
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author // author object 
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

updateAuthor('5d81f97009ed1c6556ab9c3c');

//createCourse('Node Course', new Author({ name: 'Mosh' }));
