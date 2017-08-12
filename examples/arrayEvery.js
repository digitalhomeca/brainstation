function isNumber (element, index, array) {
  return !isNaN(Number(element));
}

console.log(['A', 5, 8, 130, 44].every(isNumber));  
console.log([12, 40, 18, 130, 44].every(isNumber));