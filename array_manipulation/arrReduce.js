// reduce function reduces array to single item

var numbers = [ -8, 4, 7, 42, 1, 14, 100, 0];

// calculate max number in array and start with zero
var maximum = numbers.reduce(function(a,b,c) {
    if (b>a) {
        a=b;
    }
           return a;
},-Infinity);

console.log('Max number is ' + maximum);


// calculate min number in array and start
let minimum = numbers.reduce(function(a,b,c) {
    if (b<a) {
        a=b;
    }
     return a;
},Infinity);

console.log('Min number is ' + minimum);

// calculate sum of all numbers - the zero is the initial for previous
let sum = numbers.reduce(function (previous, current, index) {
    return previous += current;
}, 0);
 
console.log("Sum is " + sum + ".");

//average 
let avg = sum / numbers.length;
console.log(avg);