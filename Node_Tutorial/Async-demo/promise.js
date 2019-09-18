
const input = 2;
// promise has resolve and reject function 
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(input === 1) resolve(input); // resolve return result
        else reject(new Error('Error message')); // reject returns an error 
    }, 2000);
});

p.then(result => console.log(result)) // .then returns result
.catch(error => console.log(error.message)); // .catch returns error 