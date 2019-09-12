// creating custom middlewear function 
// middlewear functions are external functions 
function log (req, res, next) {
    console.log('logging.. all functions');
    // passes the data to the next middlewear function 
    // if next() not defined, middlewear function wont continue.
    next();    
};
// exporting the middlewear function 
module.exports = log;