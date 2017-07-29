/// Spread uses ... to pass array


// from mozilla - Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

var nums = [3,4,5,6];

function addUp(a,b,c,d) {
    return (a + b + c + d);
}

console.log(addUp(3,4,5,6));
 
console.log(addUp(...nums));

// insert parts array into lyrics array 
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 

console.log(lyrics);

// concatenate two arrays

var numbers = [1,2,3,4,5];
var letters = ['a','b','c','d','e'];
var comboNA = [...numbers,...letters];
console.log(comboNA);
var comboAN = [...letters,...numbers];
console.log(comboAN);


