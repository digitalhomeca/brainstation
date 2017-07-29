// reverse array

s = [1,2,3];
var reverseOutput = s.reverse("");
console.log(reverseOutput);

// split string into an array of individual letters

t = "term";
var splitString = t.split("");
console.log(splitString);

// better way
console.log(Array.from('hello'));

// array to string

arr = [1,2,3,4,5]
console.log(arr.join(""));

// split string to array, reverse array and then turn it into a string

w = "string";
var reverse = w.split("").reverse().join("");
console.log(reverse);

const bar = ['a','b','c']
console.log(Array.from(bar));

