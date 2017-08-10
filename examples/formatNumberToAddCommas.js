// changes string of number to include commas
// uses regex

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log(numberWithCommas(123456789));

// this solution uses .localString
// this solution seems simpler and works in situations where local user preferences for numbers is different
y = 123456789;
console.log(y.toLocaleString());


