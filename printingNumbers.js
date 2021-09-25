
//print odd numbers 1 to 10
function printOddNumbers() {
    let oddNumbers = [];
    for (let i = 1; i <= 10; i += 2) {
        oddNumbers.push(i);
    }
    console.log('odd numbers ' + oddNumbers);
}

printOddNumbers();