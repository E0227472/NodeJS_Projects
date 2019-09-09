
// // to import modules from other files => similar to react's import statement 
// const logger = require('./logger');
// logger = 10;

// logger.log("hi");

// // path - build in module by node. 
// // Using build on module by node 
// const path = require('path');
// const loggerPath = path.parse('https://google.com');

// console.log(loggerPath);

// os - build in module by node 
// const os = require('os');
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}  Free Memory: ${freeMemory}`);

// fs - build in module by node (file system)
// const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

// importing the class, creating an object and using the class's methods 
const Logger = require('./logger'); // importing a class

const logger = new Logger(); 

logger.log("activate event ");




