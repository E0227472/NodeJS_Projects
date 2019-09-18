// one to one relationship - between course and author e.g 

// using embedded documents (DeNormalization) => adv : faster query performance 
let course = {
    author: {
        name: 'san'
    }
}

// using References (normalization) => adv : consistency (easier to update)
let author = {
    name: 'san'
}

let course = {
    author: 'id'
}

// hybrid approach
let author = {
    name: 'san'
    // 50 other properties 
}

let course = {
    author: {
        id: 'ref',
        name: 'san'
        // only return 2 properties in each course object 
    }
}