function showMessage(){
    alert("Hello world");
}


showMessage();



function showmessage(){
    let message = "Hello, i'm JavaScript";
    alert(message);
}

showmessage();        //Hello, i'm JavaScript
alert(message)   ;    //error, the variable is local to the function


let userName = "John";
function showname(){
    let message = "Hello, " + userName;
    alert(message);
}
showname();






function showName(){
    let userName = "Bob";
    let message = "Hello, "+userName;
    alert(message);
}
showName();     //Bob
alert(userName);    //John




function Showmessage(from, text){
    alert(from + ": "+ text);
}
Showmessage("Zhaisan","Hello");
Showmessage("Ann", "What's up?");





function ShowMessage(from, text){
    from = '*' + from + '*';
    alert(from + ": " + text);

}
let from = "Ann";
ShowMessage(from, "Hello");     // *Ann*: hello
alert(from);    //Ann




function showmess(from, text = "no text given"){
    alert(from + ": " + text);
}
showmess("Ann");      //Ann: no text given
showmess("Ann", undefined);        //Ann: no text given



function showMes(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}




function showmessage1(from, text){
    if (text === undefined) text = 'no text given';
    alert(from + ": " + text);
}




function showmessage2(from, text){
    text = text || 'no text given';
}





function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message











function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
//   . . . 
}





function showCount(count){
    alert(count ?? 'unknown');
}
showCount(0);      //0
showCount(null);    //unknown
showCount();         //unknown




function sum(a, b){
    return a+b;

}
let result = sum(1,2);    
alert(result);   //3





function checkAge(age){
    if (age>=18){
        return true;
    }
    else {
        return confirm("Do you have permission from your parents? ");
    }
}
let age = prompt("How old are you?", '');
if (checkAge(age)) alert('Access granted');
else alert('Access denied');








function showMovie(age){
    if (!checkAge(age)){
        return;
    }
    alert("Showing you the movie");
}





function doNothing(){}

alert(doNothing === undefined);     //true




function DoNothing(){
    return;
}

alert(DoNothing === undefined);     //true







// Never add a newline between return and the value
// For a long expression in return, it might be tempting to put it on a separate line, like this:

// return
//  (some + long + expression + or + whatever * f(a) + f(b))
// That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

// return;
//  (some + long + expression + or + whatever * f(a) + f(b))
// So, it effectively becomes an empty return.

// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )
// And it will work just as we expect it to.






function showprimes(n){
    nextPrime : for (let i = 2; i<n; i++){
        for (let j = 2; j<i; j++){
            if (i%2 == 0) continue nextPrime;
        }
    }
}




function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}







// task 1

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }




// solution
// No difference!

// In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.




// task 2
function CheckAge(age){
    return (age > 18) ? true : confirm("Did your parents allow you?");

}

function CheckAge1(age){
    return (age> 18)  || confirm("Did parents allow you?");
}




// task 3
function min(a, b){
    if (a>b) return b;
    else return a;
}




// task 4
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}






