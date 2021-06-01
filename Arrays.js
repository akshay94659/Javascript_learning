// Array in javascript 

var countries =["India","China","Germany","Delhi"];

console.log(countries[0]);

// console.log(countries);

// console.log(countries.length);

var states = new Array("J&K", "Haryana","Punjab", "Pakistan");

//console.log(states);

var users = ["Akshay","akshay94659@gmail.com","JIo", 2, true];

// pull and push
// Pull is use dto delete the element at the end and push is used to add the element at the end

users.pop();

users.push("NEW VALUE");

console.log(users);

// Shift and  Unshift. Unshift is used to push the values at the start and Shift is used to delete at  the start
users.unshift(true);

console.log(users);
users.shift();

console.log(users);

// indexOf function gives the index of element in array

// callback and array function

var evenodd =  (element) =>
{
    return element % 2 === 0
}

console.log( evenodd(3));

 var results = [2,4,2,6,7].every((e) => (e %2 === 0));

 console.log(results);