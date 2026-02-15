res = a || b;

alert(true||false);   //true
alert(true || true ); //true
alert(false || true);   //true
alert(false||false);    //false


if (1 || 0){
    alert("Truth");
}

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18  || isWeekend){
    alert('The office is closed. ');
}


alert(1 || 0);    

alert(null || 1);  //1,   because 1 is true
alert(null || 0);    // 0;
alert(null || 0 || 1);     // 1 , the first truth value
alert(undefined || null || 0);    //0 , all falsy, returns the last value;


let firstName = "";
let lastname = "";
let nickname = "SuperCoder";
alert(firstname || lastname || nickname || "Anonymous");    // true
true || alert("not printed");
false || alert("printed");





res1 = a && b;

alert(true && false);   //false
alert(true && true );   //true
alert(false && true);    //false
alert(false && false);   //false


let hour1 = 12;
let minute = 30;

if (hour == 12 && minute == 30){
    alert('The time is 12:30');
}



if (1 && 0){
    alert("Won't work, because the result is falsy");
}

alert(1 && 0);    //0
alert(1 && 5);    //5



alert(null && 5);    //null
alert(0 && 'No matter what');  //0

alert(1 && 2 && null && 3);    //null

alert(1 && 2 && 3);   //3, the last one



let x = 1;
if (x>0) alert("Greater than zero");





res3 = !value;



alert(!true);    // false
alert(!false);   // true


alert(!!"non-empty string");     //true
alert(!!null);   //false



alert(Boolean("non-empty string"));   //true
alert(Boolean(null));      //false



//task 1
alert(1 && null && 2);     //null




//task 2
alert(alert(1) && alert(2));    //1   and then undefined



//task 3
alert(null || 2 && 3 || 4);     //3



//task 4
let AGE = prompt("How old are you?", "");
if (AGE>=14 && AGE<=90){
    alert("Between");
}



//task 5
if (AGE <= 14 || AGE>= 90){
    alert("Not between");
}


if (-1 || 0) alert('first');      //-1     'first'
if (-1 && 0) alert('second');     //0       
if (null || -1 && 1)  alert('third');    //1      'third'




//task 6

let login = prompt("Who's there?", "");
if (login === "Admin"){
    let password = prompt("Password?", "")
    if (password === 'TheMaster'){
        alert("Welcome!");
    }
    else if (password === '' || password === null){
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }

}
else if (login === '' || login === null){
    alert("Canceled");
}
else {
    alert("I don't know you");
}