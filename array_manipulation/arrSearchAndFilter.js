//Array of people, there is no need to change this
const PERSONDATA = [{
    name:"Michael",
    rank:4,
    age:19,
    score: 66
},{
    name:"Emily",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"William",
    rank:10,
    age:26,
    score:11
},{
    name:"James",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Geoff",
    rank:9,
    age:41,
    score:19
}]

search("James",PERSONDATA);  // Should log that James was found at position #5
search("Eric",PERSONDATA);   // Should log that Eric was not found.
search("Geoff",PERSONDATA);
search("Isabella",PERSONDATA);
search("Hugh",PERSONDATA);



// console.log(filter(PERSONDATA, 50)) // Should display an array of everyone with a score greater than 50
/* Ex: 
[ { name: 'Alex', rank: 3, age: 34, score: 75 },
  { name: 'Isabella', rank: 1, age: 31, score: 100 },
  { name: 'Mia', rank: 5, age: 28, score: 54 },
  { name: 'Michael', rank: 4, age: 19, score: 66 },
  { name: 'Sam', rank: 2, age: 23, score: 80 } ]
*/

/*
    Write your functions below.
*/



function search(firstName,PERSONDATA) {

    for ( i = 0; i < PERSONDATA.length; i++) {
        if (firstName === PERSONDATA[i].name) {
            console.log(firstName + " found at position #" + (i+1));  
            break;
        } else {
            if (i == (PERSONDATA.length-1)) {
                console.log(firstName + " not found");  
            }
        }
    }
}

function filter(score) {
    for ( i = 0; i < PERSONDATA.length; i++) {
        if (PERSONDATA[i].score >= score) {
        console.log(PERSONDATA[i]);
    } 
}
}

filter(50);

// test sorting of array

myArray = ["pineapple","mango","apple","quinces","bananas", "oranges"];

function fruitSorter(array) {
    console.log(array.sort());
}

console.log(myArray);
fruitSorter(myArray);



var points = [40, 100, 1, 5, 25, 10];
function pointSorter(array) {
  console.log(array.sort(function(a, b){return a-b})); 
  

}
console.log(points);
pointSorter(points);

function personSorter(array) {
    console.log(array.sort());
}
personSorter(PERSONDATA);
