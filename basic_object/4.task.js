/*
Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// Counting the number of properties
const numberOfProperties = Object.keys(student).length;

console.log("Number of Properties:", numberOfProperties);
