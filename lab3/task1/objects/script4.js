function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);        //Jack
alert(user.isAdmin);      //false










function User(name){
    this.name = name;
    this.isAdmin = false;
}



let user1 = {
    name: "Jack",
    isAdmin: false
};




let user2 = new function(){
    this.name = "John";
    this.isAdmin = false;
}



let user3 = new function() {
    this.name = "John";
    this.isAdmin = false;
}






function User() {
    alert(new.target);
}

User();    //undefined
new User();        //function user{}



function User() {
    if (!new.target){
        return new User(name);
    }
    this.name = this.name;
}

let john = User("John");               //redirects call to new User
alert(john.name);                     // John




function BigUser(){
    this.name = "John";
    return { name : "Godzilla" };
}
alert(new BigUser().name );     //Godzilla, got that object




function Smaller() {
    this.name = "John";
    return; // <-- returns this
}
alert(new SmallUser().name );     //John






let user4 = new User;
let user5 =  new User;










function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert( "My name is: " + this.name);
    };
}

let john2 = new User("John");
 john.sayHi();    //my name is: John





//  task 1
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true










// task 2
function Calculator() {
    this.read = function(){
        this.a = prompt("a?", "");
        this.b = prompt("b?", "");
    };
    
    this.sum = function() {
        return Number(this.a) + Number(this.b);
    }

    this.mul = function() {
        return this.a * this.b;
    }
}


let calculator =  new Calculator();
calculator.read();
alert("sum: "+ calculator.sum() );
alert("Mul: "+ calculator.mul() );









// task 3
function Accumulator(startinValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("a?", "");
    
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);