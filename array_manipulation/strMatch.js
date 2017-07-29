// use reg exp to replace characters or words

// matches vowels
text ="Head, arm, knees and toes";
var match = text.match(/[aeiou]/gi);
console.log(match);
console.log(match.length);

// matches on a particular word /gi is global and case insensitive
string1 ="hello how are you";
var match2 = string1.match(/you/gi);
console.log(match2);
console.log(match2.length);

// find out if string has a word starting with n
var match3 = string1.match(/^l/gi);
console.log(match3);

// check see if letter exists in string - returns true or false
var testString = "The quick brown fox."
var patt = new RegExp("x");
var result = patt.test(testString);
console.log(result); //true

var testString2 = "The quick brown fox."
var patt2 = new RegExp("z");
var result2 = patt2.test(testString2);
console.log(result2); //false


