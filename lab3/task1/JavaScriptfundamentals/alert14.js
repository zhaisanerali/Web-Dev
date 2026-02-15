let a = 2 + 2;
switch (a){
    case 3: alert("Too small"); break;
    case 4: alert("exactly"); break;
    case 5: alert("Too big"); break;
    default: alert("I do not know such values");
}


a = "1";
let b = 0;
switch (+a){
    case b+1: alert("This runs, because +a is 1, exactly equals b+1"); break;
    default : alert("this doesn't run");
}




a = 3;
switch (a){
    case 4: alert("right!"); break;
    case 3: alert("wrong"); alert("Why don't you take a math class?"); break;
    default: alert('The result is strange. Really.');
}



let arg = prompt("enter a value? ");
switch (arg){
    case '0':
    case '1': alert("One or zero"); break;

    case '2': alert('two'); break;

    case 3: alert('never executed!'); break;
    default: alert('An unknown value');
}



// task 1
let browser = prompt("Enter name of some browser:", "");
if (browser == 'Edge') alert("Edge");
else if ("Chrome") alert("Chrome");
else if ("Firefox") alert("Firefox");
else if ("Safari") alert("Safari");
else if ("Opera") alert("Opera");
else alert("We hope that this page looks ok!");




// task 2
let aa = +prompt("a?", "");
switch (aa){
    case 0: alert(0); break;
    case 1: alert(1); break;
    case 2 || 3: alert('2,3'); break;

}
