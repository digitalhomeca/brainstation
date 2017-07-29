// new array is same in memory so changing 2 changes 1
arr1 = [1,2,3];

let arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr1.push(40);

// this creates a new array in a new location in memory
let arr3 = Array.from(arr1);

console.log(arr3);


