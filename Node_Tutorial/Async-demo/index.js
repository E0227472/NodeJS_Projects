// getting data through callback function (or passing async data to callbacks);

// function getUser(id, callback) {
//     console.log('before calling database');
//     setTimeout(() => {
//         callback({id: id, name: "some name"});
//     }, 2000);
// }

// getUser(1,  (user) => {
//     console.log(`${user.name} is saved in the database`);
// });

// sample async database operation 
const repo = [
    {username: 'tom', repo: 'repo1'}, 
    {username: 'sam', repo: 'repo2'},
    {username: 'jackson', repo: 'repo3'}
]

 function getRepositories (username) {
    for(let obj of repo) {
        for(let key in obj) {
            if(obj[key] === username) {
                return obj;
                break;
            }
        }
    }
}




// // sample async function
// function getRepo (username, callback) {
//     setTimeout (() => {
//        const result = getRepositories(username);
//        callback(result);
//     }, 2000)
// }
// const username = 'jackson';
// getRepo(username, function (result) {
//     console.log(result.repo);
// });

// replacing callback with promise 
// function getRepo (username) {
// return new Promise((resolve, reject) => {
//     setTimeout (() => {
//         const result = getRepositories(username);
//         if(result) resolve(result.repo);
//         else reject(new Error('no such user exists'));
//      }, 2000)
// })
// }

// const p = getRepo('tom');

// p.then(result => console.log(result))
// .catch(error => console.log(error.message));

// combining multiple promises together 

    // function getRepo (username) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout (() => {
    //             const result = getRepositories(username);
    //             if(result) resolve(result.repo);
    //             else reject(new Error('no such user exists'));
    //          }, 2000)
    //     })
    //     }
    //     // 2 promises 
    //     const p1 = getRepo('tom');
    //     const p2 = getRepo('jackson');
    //     // combining promises and putting them in an array 
    //     // both promises must be successful to return resolve, otherwise an error is returned
    //     Promise.all([p1,p2])
    //     .then(result => console.log(result));

        const username = 't';
 
        function getRepo (username) {
            return new Promise((resolve, reject) => {
                setTimeout (() => {
                    const result = getRepositories(username);
                    if(result) resolve(result.repo);
                    else reject(new Error('no such user exists'));
                 }, 2000)
            })
            }

            async function displayResult () {
                try {
            const result = await getRepo(username); // returns resolve or reject
            console.log(result);
                } catch(err) {
                    console.log(err.message);
                }
            }

            displayResult();

            