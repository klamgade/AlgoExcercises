function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in bracketMap) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

// Example usage:
const brackets = "({[]})";
console.log(isValid(brackets)); 