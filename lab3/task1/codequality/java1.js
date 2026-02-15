if (n < 0 ) {alert(`Power ${n} is not supported`);}      //😠 Beginners sometimes do that. Bad! Curly braces are not needed




if (n < 0)
    alert(`Power ${n} is not supported`); 
//😠 Split to a separate line without braces. Never do that, easy to make an error when adding new lines





if (n < 0){
    alert(`Power ${n} is not supported`);
}   //😃 The best variant






if (n < 0) alert(`Power ${n} is not supported`);




let str = `ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.`;




  if (
    id === 123 &&
    moonPhase === 'Warning Gibbous' &&
    zodiacSign === 'Libra'
  ){
    letTheSorceryBegin();
  }
  //The maximum line length should be agreed upon at the team-level. It’s usually 80 or 120 characters.






show(parameters,
     aligned, // 5 spaces padding at the left
     one,
     after,
     another
  ) ;{
  // ...
}





function pow(x, n) {
    let result = 1;


    for (let i = 0; i < n; i++){
        result *= x;
    }



    return result;
}
//Insert an extra newline where it helps to make the code more readable.
//  There should not be more than nine lines of code without a vertical indentation.






for (let i = 0; i < 10; i++){
    if (cond) {

    }
}


for (let i = 0; i < 10; i++){
    if (!cond) continue;
}







function pow(x , n){
    if (n < 0){
        alert("Negative 'n' not supported");
    }else {
        let result = 1;

        for (let i = 0; i < n; i++){
            result *= x;
        }
        return result;
    }
}





function pow(x, n){
    if (n < 0){
        alert("Negative 'n' not supported");
        return;
    }
    
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }
    
    return result;
}






// task 1

function pow(x,n)  // <- no space between arguments
{  // <- figure bracket on a separate line
  let result=1;   // <- no spaces before or after =
  for(let i=0;i<n;i++) {result*=x;}   // <- no spaces
  // the contents of { ... } should be on a new line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- technically possible,
// but better make it 2 lines, also there's no spaces and missing ;
if (n<=0)  // <- no spaces inside (n <= 0), and should be extra line above it
{   // <- figure bracket on a separate line
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else // <- could write it on a single line like "} else {"
{
  alert(pow(x,n))  // no spaces and missing ;
}






function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

x = prompt("x?", "");
n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}