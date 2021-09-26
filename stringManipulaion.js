//Palindrome Number: Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
const isPalindrome = (numInt) => {
        let numIntToString = numInt.toString();
        let numReversed = numInt.toString().split('').reverse('').join('');
        return numReversed == numIntToString ? true: false;
}

console.log(isPalindrome(-101));