//Q1
console.log("Hello World");
//Q2
let a = 5;
let b = 3;
let sum = a + b;
console.log(sum);
//Q3
let numSqrt = 16;
let sqrt = Math.sqrt(numSqrt);
console.log(sqrt);
//Q4
let base = 5;
let height = 10;
let area = (base * height) / 2;
console.log(area);
//Q5
let a1 = 1, b1 = -3, c1 = 2;
let discriminant = b1 * b1 - 4 * a1 * c1;
let root1 = (-b1 + Math.sqrt(discriminant)) / (2 * a1);
let root2 = (-b1 - Math.sqrt(discriminant)) / (2 * a1);
console.log(`Root1: ${root1}, Root2: ${root2}`);
//Q6
let kilometers = 5;
let miles = kilometers * 0.621371;
console.log(miles);
//Q7
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);
//Q8
let x = 5;
let y = 3;
[x, y] = [y, x];
console.log(`x: ${x}, y: ${y}`);
//Q9
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
//Q10
let numtest = -5;
if (numtest > 0) {
    console.log("Positive");
} else if (numtest < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
//Q11
let num = 10;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
//Q12
let a2 = 5, b2 = 10, c2 = 3;
let largest = Math.max(a2, b2, c2);
console.log(largest);
//Q13
let numP = 7;
let isPrime = true;

if (numP === 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(numP); i++) {
        if (numP % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime" : "Not Prime");
//Q14
let lower = 10, upper = 50;

for (let i = lower; i <= upper; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && i > 1) {
        console.log(i);
    }
}
//Q15
let numC = 5;
let factorial = 1;

for (let i = numC; i > 0; i--) {
    factorial *= i;
}

console.log(factorial);
//Q16
let numM = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numM} * ${i} = ${numM * i}`);
}
//Q17
let n1 = 0, n2 = 1, nextTerm;
let n = 10;
console.log(n1);
console.log(n2);

for (let i = 1; i <= n - 2; i++) {
    nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}
//Q18
let lowerI = 100, upperI = 999;

for (let i = lowerI; i <= upperI; i++) {
    let sum = 0;
    let num = i.toString().split('');
    for (let j = 0; j < num.length; j++) {
        sum += Math.pow(parseInt(num[j]), num.length);
    }
    if (sum == i) {
        console.log(i);
    }
}
//Q19
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let nR = 10;
for (let i = 0; i < nR; i++) {
    console.log(fibonacci(i));
}
//Q20
function factorialD(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialD(n - 1);
    }
}

let numV = 5;
console.log(factorialD(numV));
//Q21
function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operator';
    }
}

let result = calculator(10, 5, '+');
console.log(result);
//Q22
let nC = 10;
let sumC = 0;
for (let i = 1; i <= nC; i++) {
    sumC += i;
}
console.log(sumC);
//Q23
function sumOfNaturalNumbers(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sumOfNaturalNumbers(n - 1);
    }
}

console.log(sumOfNaturalNumbers(10));
//Q24
let aD = 27, bD = 57;
if (aD % 10 === bD % 10) {
    console.log("Same last digit");
} else {
    console.log("Different last digit");
}
//Q25
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(12, 15));
//Q26
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));
//227
let numE = 15;
for (let i = 1; i <= numE; i++) {
    if (numE % i === 0) {
        console.log(i);
    }
}
//Q28
let randomNumber1 = Math.floor(Math.random() * 100) + 1;
let guess = 50; // Example guess

if (guess === randomNumber1) {
    console.log("Correct Guess");
} else {
    console.log("Wrong Guess");
}
//Q29
let deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
deck.sort(() => Math.random() - 0.5);
console.log(deck);
//Q30
let char = 'A';
console.log(char.charCodeAt(0));
//Q31
let str = "madam";
let reversed = str.split('').reverse().join('');
console.log(str === reversed ? "Palindrome" : "Not Palindrome");
//Q32
let words = ["apple", "banana", "cherry"];
console.log(words.sort());
//Q33
let str1 = "Hello World";
let newStr = str1.replace('World', 'Everyone');
console.log(newStr);
//Q34
let str2 = "Hello";
let reversed1 = str2.split('').reverse().join('');
console.log(reversed1);
//Q35
let str3 = "hello world";
let newStr1 = str3.charAt(0).toUpperCase() + str3.slice(1);
console.log(newStr1);
//Q36
let str4 = "Hello World";
let count = (str4.match(/[aeiou]/gi) || []).length;
console.log(count);
//Q37
let multiLineString = `This is
a multi-line
string.`;
console.log(multiLineString);
//Q38
let obj1 = {};
let obj2 = new Object();
let obj3 = { name: "John", age: 30 };
//Q39
let str5 = "Hello World";
let char1 = 'o';
let count2 = str5.split(char1).length - 1;
console.log(count2);
//Q40
let person = { name: "John", age: 30 };
delete person.age;
console.log(person);
//Q41
let person1 = { name: "John", age: 30 };
console.log('age' in person1 ? "Key exists" : "Key does not exist");
//Q42
let obj = { name: "John", age: 30 };
let clone = { ...obj };
console.log(clone);
//Q43
let person3 = { name: "John", age: 30 };
for (let key in person3) {
    console.log(`${key}: ${person3[key]}`);
}
//Q44
let objJ1 = { name: "John" };
let objJ2 = { age: 30 };
let merged = { ...objJ1, ...objJ2 };
console.log(merged);
//Q45
let person4 = { name: "John", age: 30 };
let count4 = Object.keys(person4).length;
console.log(count4);
//Q46
let person5 = { name: "John" };
person5.age = 30;
console.log(person5);
//Q47
let str6 = "Hello World, World!";
let newStr4 = str6.replace(/World/g, "Everyone");
console.log(newStr4);
//Q48
let num5 = 10;
console.log(num5.toString(2));
