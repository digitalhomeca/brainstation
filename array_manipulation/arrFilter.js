// filter spits back elements which are evaluated as true in the callback

// this returns numbers that are divisible by three
var numbers = [1, -7, 4, 3, 9, 42];
var byThree = numbers.filter(function(a){
        return (a % 3 == 0) ;
});
console.log(byThree);

// find function finds first item in array to match condition
console.log(numbers.find(a => (a % 3 ==0)));


// filter tasks whose duration is greater or equal to 120
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

var longTasks = tasks.filter(function (task) {
    return task.duration >= 120;
});

console.log(longTasks);