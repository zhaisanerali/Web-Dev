let i = 0;
while (i<3){
    alert(i);
    i++;
}


i = 3;
while (i>=0){
    alert(i);
    i--;
}


i = 5;
do {
    alert(i);
    i++;
} while (i<7);



for (let i = 9; i<12; i++){
    alert(i);
}
alert(i);


let j = 0;
for (; j <3; j++){
    alert(j);
}


let k = 0;
for (; k<3;){
    alert(i++);
}


//              for (;;) {
//                  // repeats without limits
//              }




let sum = 0;
while (true){
    let value =+ prompt("Enter a number", "");
    if (!value) break;   
    sum += value;

}
alert("Sum: " + sum);


for (let i = 0; i<10; i++){
    if (i%2 == 0) continue;
    alert(i);     //1 3 5 7 9
}




for (let i = 0; i<10; i++){
    if (i%2){
        alert(i);
    }
}



for (let i = 0; i<3; i++){
    for (let j = 0; j<3; j++){
        let input = prompt("Value at coords (${i},${j})", "");

    }
}
alert("Done");




// We need a way to stop the process if the user cancels the input.

// The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

// A label is an identifier with a colon before a loop:

// labelName: for (...) {
//   ...
// }





outer: for (let i = 0; i<3; i++){
    for (let j = 0; kj<3; j++){
        let input = prompt('Value at coords (${i},${j}');
        if (!input ) break outer;

    }

}
alert("Done");




// task 1
let n = 3;
while (n){
    alert(n--);       //3 2 1
}   




// task 2
let m = 0; 
while (++m < 5) alert(m);        //1 2 3 4




// task 2.2
m = 0;
while (m++ < 5) alert(i);     //  1 2 3 4 5
// The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

// But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

// Then follow 2, 3, 4…

// Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

// The value i = 5 is the last one, because on the next step while(5 < 5) is false.





// task 3
for (let i = 0; i<5; i++) alert(i);    //0 1 2 3 4 



for (let i = 0; i<5; ++i) alert(i);      //0 1 2 3 4





// task 4
for (let i = 0; i<11; i++){
    if (i%2 == 0){
        alert(i);
    }
}




// task 5
i = 0;
while (i<3){
    alert(`number ${i}!`);
    i++;
}






// task 6
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);





// task 7
n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  alert( i ); 
}