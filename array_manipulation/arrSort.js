// sort numeric array from smallest to largest

var numbers = [ -8, 4, 7, 42, 1, 14, 100, 0];
let sort = numbers.sort((a, b) => a - b);
console.log('Sorted array:' + sort);

// sort array alphabetically
var fruits = ['banana', 'apple', 'pear', 'watermelon', 'orange'];
console.log('Sorted array:' + fruits.sort());

// Sort objects based on the value of one of their properties
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});


// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
