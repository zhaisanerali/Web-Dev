let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert('you are right');

if (year == 2015){
    alert("That's correct" );
    alert("You are so smart");
}


if (0) {
    alert("Oh, no");
}


if (1){
    alert("Oh, yes");
}


let cond = (year == 2015)
if (cond){
    alert("Yes, true");

}


let year1 = prompt("How old are you?", "");
if (year == 20){
    alert("You are 20 years old");
}else {
    alert(`You are ${year1} years old`);
}



let year2 = prompt("In what year was the first computer created?", "");
if (year < 1946){
    alert('Too early...');
}
else if (year > 1946){
    alert('Too late...');
}
else{
    alert('Exactly');
}



let age = prompt("How old are you?", "");
let res = (age > 18) ? 'Hello':
        (age<18) ? 'Hi baby':
        age(age >100) ? 'Greetings!':
        'hello hello';
alert(res);