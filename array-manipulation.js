
//Reverse Integer: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0
/**
 * @param {number} x
 * @return {number}
 */
 function reverse(number) {
    let result = 0;
    const negativeNum = number < 0 ? -1 : 1;
    const lowest = Math.pow(-2, 31);
    const highest = Math.pow(2, 31) - 1;
    if(lowest <= number <= highest) {
        let numAsStringArray = number.toString().split("");
        result = numAsStringArray.reverse().join("").slice(0, numAsStringArray.length - 1);
        console.log('number, result', number, result)
    }
    return result * negativeNum;
};

console.log(reverse(-562));