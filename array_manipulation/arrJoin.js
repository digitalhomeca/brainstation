// array to concatenated string
// result is 12345

arr = [1,2,3,4,5]
console.log(arr.join(""));

// result is a2c45
arr2 = ['a',2,'c',4,5]
console.log(arr2.join(""));

// V1 array to comma delimited string

csv = ["Name",2,"Hello",4,5]
console.log(csv.join(","));

// V2 array to comma delimited string
csv = ["Name",2,"Hello",4,5]
console.log(csv.join());

// space between
space = ["The","quick","brown","fox",5]
console.log(space.join(" "));
