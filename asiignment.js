// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


//Ans=>

function findPairsWithSum(arr, targetSum) {

    const seen = new Set();


    const pairs = [];

    for (let num of arr) {

        const complement = targetSum - num;


        if (seen.has(complement)) {

            pairs.push([num, complement]);
        }


        seen.add(num);
    }

    return pairs;
}


const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 7;
const result = findPairsWithSum(arr, targetSum);
console.log(result); 


//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.


//Ans=>

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        
        left++;
        right--;
    }
}


const myArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(myArray);
console.log(myArray); 




//Q3.Write a program to check if two strings are a rotation of each other?


//Ans=>

function areRotations(str1, str2) {
    
    if (str1.length !== str2.length) {
        return false;
    }

    
    const concatenatedStr = str1 + str1;

    
    if (concatenatedStr.includes(str2)) {
        return true;
    }

    return false;
}


const string1 = "hello";
const string2 = "lohel";

if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
}




//Q4. Write a program to print the first non-repeated character from a string?


//Ans=>

function firstNonRepeatedChar(inputStr) {
    const charCount = new Map();

    
    for (const char of inputStr) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    
    for (const char of inputStr) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    
    return null;
}


const inputString = "programming";
const result1 = firstNonRepeatedChar(inputString);

if (result1 !== null) {
    console.log(`The first non-repeated character is: ${result1}`);
} else {
    console.log("There are no non-repeated characters in the string.");
}


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.



function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${sourceRod} to ${destinationRod}`);
        return;
    }

    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
}


const numDisks = 4;
towerOfHanoi(numDisks, 'A', 'B', 'C');




//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function postfixToPrefix(postfixExpression) {
    const stack = [];
    
    for (let char of postfixExpression) {
        if (!isOperator(char)) {
            
            stack.push(char);
        } else {
            
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const prefixExpression = char + operand1 + operand2;
            stack.push(prefixExpression);
        }
    }
    
    
    return stack.pop();
}


const postfixExpression = '23+5*';
const prefixExpression1 = postfixToPrefix(postfixExpression);
console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression1}`);



//Q7. Write a program to convert prefix expression to infix expression.


//Ans=>

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function prefixToInfix(prefixExpression1) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];

    for (let i = prefixExpression1.length - 1; i >= 0; i--) {
        const char = prefixExpression1[i];

        if (char.match(/[a-zA-Z0-9]/)) {
            
            stack.push(char);
        } else if (isOperator(char)) {
            
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const infixExpression = `(${operand1}${char}${operand2})`;
            stack.push(infixExpression);
        }
    }

    
    return stack.pop();
}


const prefixExpression2 = '*+AB-CD';
const infixExpression = prefixToInfix(prefixExpression2);

console.log(`Prefix Expression: ${prefixExpression2}`);
console.log(`Infix Expression: ${infixExpression}`);



//Q8. Write a program to check if all the brackets are closed in a given code snippet.




function areBracketsBalanced(codeSnippet) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of codeSnippet) {
        if (bracketPairs[char]) {
            
            stack.push(char);
        } else if (Object.values(bracketPairs).includes(char)) {
            
            const top = stack.pop();
            if (bracketPairs[top] !== char) {
                return false; 
            }
        }
    }

    
    return stack.length === 0;
}


const codeSnippet1 = 'if (x > 0) { console.log("x is positive"); }';
const codeSnippet2 = 'function() { return "unbalanced } code"; }';

console.log(areBracketsBalanced(codeSnippet1)); 
console.log(areBracketsBalanced(codeSnippet2)); 



//Q9. Write a program to reverse a stack.




class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const auxStack = new Stack();

    
    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }

        while (!auxStack.isEmpty()) {
        stack.push(auxStack.pop());
    }
}


const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log("Original Stack:");
console.log(myStack.items);

reverseStack(myStack);

console.log("Reversed Stack:");
console.log(myStack.items);



//Q10. Write a program to find the smallest number using a stack.


//Ans=>

class Stack {
    constructor() {
        this.items = [];
        this.minStack = []; // Auxiliary stack to track the minimum value
    }

    push(item) {
        this.items.push(item);

        // Update the auxiliary stack if the item is smaller than the current minimum
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (!this.isEmpty()) {
            // Check if the item being popped is the minimum value
            if (this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    getMin() {
        if (!this.isEmpty()) {
            return this.minStack[this.minStack.length - 1];
        }
    }
}

// Example usage:
const myStack1= new Stack();
myStack1.push(3);
myStack1.push(5);
myStack1.push(2);
myStack1.push(1);

console.log("Stack:");
console.log(myStack1.items);

const smallest = myStack1.getMin();
console.log(`Smallest number in the stack: ${smallest}`);