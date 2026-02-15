function sayHi(){
    alert("Hello");
}





let sayhi = function(){
    alert("hello");
}



alert(sayHi);       //shows the function code





let func = sayHi;        //(2) copy


func();         //Hello
sayHi();        //Hello




function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();

}


function showOk(){
    alert("You agreed!");
}



function showCancel(){
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);



ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);





function sum(a, b){
    return a + b;

}


let sum = function(a, b){
    return a+b;
};






sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}



let sayHi = function(name){
    alert(`Hello, ${name}`);
};





let age = prompt("What is your age?", 18);
if (age <18){
    function welcome(){
        alert("hello!");
    }
}
else {
    function welcome(){
        alert("Greetings!");
    }
}
welcome();    // error: welcome is not defined



age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined










age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now





age = prompt("What is your age?", 18);

welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now





