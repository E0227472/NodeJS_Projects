// events -  build in module by node 
const Events = require('events'); // Events is a class 



// Since Events is a class, extend the Events class to make use of the object's functionality 
class Logger extends Events {

 log(message) {
     this.on('scream', (args) => {
         console.log(`${message} ${args.url}`);
     })

     this.emit('scream', { id: 1, url: 'https: google.com' });
}


}
// both the variables and functions are scoped to the module. Not visible outside the module 

// to export out log => similar to react's export statement 
module.exports = Logger
