
function calculateAverage(numberArray) {
    let result = 0;
    if(numberArray.length > 0) {
        for(i = 0; i < numberArray.length; i++) {
            sum = sum + numberArray[i];
        }
        return sum/numberArray.length;
    }
    else {
        console.log('empty array');
    }
}

console.log('avg. result : ', calculateAverage([5,9,4,6,3]));