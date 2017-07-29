 // The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// adds 'drum' at position index 2 location
myFish.splice(2,0, 'drum');
console.log(myFish);


// remove drum from index position 2
myFish.splice(2,1);
console.log(myFish);

// adds multiple items starting at position index 2 location
myFish.splice(2,0, 'perch', "bass", "tetra");
console.log(myFish);

// remove 3 items starting at index position 2
myFish.splice(2,3);
console.log(myFish);

// adds multiple items starting at third last postition
myFish.splice(-2,0, 'perch', "bass", "tetra");
console.log(myFish);

// remove 3 items starting at second last postition
myFish.splice(-2,3);
console.log(myFish);