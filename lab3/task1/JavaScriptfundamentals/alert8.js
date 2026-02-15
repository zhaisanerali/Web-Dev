let x = 1;
x = -x;
alert(x);
let a = 1, b = 3;
alert(a-b);
alert(5%2);     //1
alert(8%3);     //2
alert(8%4);     //0
alert(2**2);    //4
alert(2**4);    //16
alert(4 ** (1/2));     // 2 (power of 1/2 is the same as a square root)
let s = "my" + "string";
alert(s);
alert("1"+2);     //"12"
alert(2 + "1");   //"21"
alert(2 + 2 + "1")   //"41"
alert("1" + 2 + 2);    //"122"
alert(6 - '2');       //4
alert('6'/'2');       //3


let d = 1;
alert(+d);     //1
let e = -2;
alert(e);      //-2

alert(+true);    //1     converts non numbers
alert(+"");      //0


let apples = "2";
let oranges = "3";
alert(apples + oranges); //"23"

let apples1 = "2";
let oranges1 = "3";
alert(+apples1 + +oranges1);    //5

let f = 2 * 2 + 1;
alert(f);    //5


let g = 1;
let h = 2;
let i = 3 - (g = h + 1);
alert(g);    //3
alert(i);    //0


let a1, b1, c1;
a1 = b1 = c1 = 2 + 2;
alert(a1);
alert(b1);
alert(c1);

c = 2 + 2;
b = c;
a = c;


let n = 2;
n = n + 5;    // n+=5
n = n * 2;    // n*=2
alert(n);




let counter = 2 ;
counter++;      // counter--    1
alert(counter);    //3



let counter1 = 1;
let aa = ++counter1;  
alert(aa);     //2


let counter2 = 1;
let aaa = counter2++;
alert(aaa);    //1



let counter3 = 0;
counter3++;
++counter3;
alert(counter3);    //2



let counter4 = 0;
counter4++;
alert(counter4);      //0


let counter5 = 0;
++counter5;
alert(counter5);    //1



let counter6 = 1;
alert(2 * ++counter6);    //4


let counter7 = 1;
alert(2 * counter7);
counter7++;



let a2 = (1 + 2, 3 + 4);

alert( a2 ); // 7 (the result of 3 + 4)
//Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.














