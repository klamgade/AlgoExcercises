function reverseArray(a: number[]): number[] {
    // Write your code here
    const reversedArray: number[] = [];
    for(let i: number = a.length; i <= a.length; i-- ) {
        reversedArray.push(a[i]);
    }
    return reversedArray;
};

console.log(reverseArray([9, 6, 12]));
console.log("test");
