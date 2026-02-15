let message = "hello";
alert(message);
message = 123456;
alert(message);
let n = 123;
alert(n);
n = 12.345;
alert(n);
alert(1/0);
alert(Infinity);
alert("not a number" / 2);
alert(NaN + 1);
alert(3 * NaN);
alert("not a number"/2 - 1);
console.log(typeof NaN);
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
const bigInt = 1234567890123456789012345678901234567890n;    // the "n" at the end means it's a BigInt
let str = "Hello";
let str2 = 'single quotes are ok too';
let phrase = `can embed another ${str}`;
let name = "John";
alert(`Hello, ${name}`);
alert(`the result is ${1+2}`);
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4>5;
let age = null;
alert(age);
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


let name1 = "Ilya";
alert(`hello ${1}` ); 
alert(`hello ${"name"} `);
alert(`hello ${name1}` );
