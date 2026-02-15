alert(2>1);  //true
alert(2==1);   //false
alert(2 != 1);   //true

let result = 5>4;
alert(result);


alert('Z'>'A');    //true
alert('Glow'>'Glee');     //true
alert('Bee'>'Be');     //true


alert('2'>1)  ;  //true, string '2 becomes a number 2
alert('01'==1);    //true, string '01' becomes a number 1


alert(true == 1); //true
alert(false == 0);   //true



let a = 0;
alert(Boolean(a));    //false


let b = "0";
alert(Boolean(b));  //true

alert(a==b);    //true


alert(0 == false);    //true

alert('' == false);      //true



//A strict equality operator === checks the equality without type conversion.
alert(0 === false);   //false


alert(null == undefined);      // true;

alert(null === undefined);      //false



alert(null > 0);    // false

alert(null == 0);     // false
//On the other hand, the equality check == for undefined and null is defined such that,
//  without any conversions, they equal each other and don’t equal anything else. 
// That’s why (2) null == 0 is false.


alert(null >= 0);    //true
//Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”,
//  so in one of the comparisons above it must be true, but they are both false.
//The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons 
// convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is 
// false.


// 1. Сравнение на величину (> , >=)
// Когда вы используете операторы сравнения, JavaScript пытается привести оба значения к числу.

// null при превращении в число становится 0.

// В строке (1): null > 0 превращается в 0 > 0. Это false.

// В строке (3): null >= 0 превращается в 0 >= 0. Это true.

// 2. Проверка на равенство (==)
// Здесь логика совсем другая. Для оператора == в языке прописано специальное правило: null и undefined равны друг другу и не равны больше ничему в мире (при нестрогом сравнении).

// В этом случае JavaScript не пытается превратить null в число.

// Он просто видит: «Слева null, справа 0. Они не входят в исключение null == undefined, значит, они не равны».

// В строке (2): null == 0 — это false.

alert(undefined > 0);     //false
alert(undefined < 0);  // false
alert(undefined == 0);   //false


5 > 4           //true
"apple" > "pineapple"    //false
"2" > "12"               //true
undefined == null        //true
undefined === null       //false
null == "\n0\n"          //false
null === +"\n0\n"        //false





