
/* 

Loop through an object and print the key - value pairs with their types

Input:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
Output:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// Loop through the object and print key-value pairs with types
for (let key in myObject) {
    const value = myObject[key];
    const type = typeof value;

    console.log(`key: ${key} | type: ${type}`);
}
 