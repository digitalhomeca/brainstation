//map 

// syntax is newArray = inputArray.map(function){transform and return}

// arr is the array
const arr = [5,10,15,20,100,500];
//create var that maps arr and returns transformation of each item in the array 
var div5 = arr.map(function(n){
  return n /5;
})

console.log(div5);

var squared = arr.map(function(s){
  return( s^2 );
});

console.log(squared);

// take numbers array and double it in new array
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
console.log(doubles);

// take numbers2 array and return sq root
var numbers2 = [1, 4, 9];
var roots = numbers2.map(Math.sqrt);

console.log(roots);



// mapping one item from an array of objects
var tasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];

//goal is to return an array of just tasks duration
var task_duration = tasks.map(function (item,index,array) {
    return item.duration; 
});
console.log(task_duration);

