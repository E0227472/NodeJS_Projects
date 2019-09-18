const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  // create the Author class / model 
const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

// create the course class / model 
const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId, // setting reference to the author object through id
    ref: 'Author'
  }
}));

// create new author object in database 
async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author // store the authorid as reference. 
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course
    .find()
    // loading the author object : => first argu = author object, 2nd argu = properties to select 
    // -_id : excluding the id property 
    .populate('author', 'name -_id') 
    .select('name');
  console.log(courses);
}

//createAuthor('Mosh', 'My bio', 'My Website');

 //createCourse('Node Course', '5d81eb786b339353b9b3580f')

listCourses();