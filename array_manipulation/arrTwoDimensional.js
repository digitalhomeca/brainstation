var arr2 = [[4,6,3,7],[4,5,6]];
console.log(arr2[1][2]); // result is 6

// this averages both arrays in arr2 and then adds them up
function averaging (a) {

    let avgSummed = 0;

    for (let i =0; i < a.length; i++) { 
        arrSum=0;

        for (let j=0; j < a[i].length; j++)
            arrSum += a[i][j];

        let arrAvg = arrSum / a[i].length;
        avgSummed = avgSummed + arrAvg;

    } 

    return avgSummed
}

console.log(averaging(arr2));

var mixedArray = ['a', [4,5,6], 1, {name: 'Hugh', lastname: "Thompson"}, function test() {console.log('Hello'); return "Done";}];
console.log(mixedArray);
console.log(mixedArray[1][2]);
console.log(mixedArray[3].name);
console.log(mixedArray[4]());
console.log(Object.keys(mixedArray[3]));
