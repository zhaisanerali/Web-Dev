let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;






function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.






let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines






// Looks natural, right? But single or double quotes do not work this way.

// If we use them and try to use multiple lines, there’ll be an error:
// let guestList1 = "Guests: // Error: Unexpected token ILLEGAL
//   * John";




let guestList1 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList1); // a multiline list of guests, same as above







let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true







alert( `The backslash: \\` ); // The backslash: \






alert( 'I\'m the Walrus!' ); // I'm the Walrus!









alert( `My\n`.length ); // 3








let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );








let str3 = `Hello`;

alert( str3[-2] ); // undefined
alert( str3.at(-2) ); // l















for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}







let str4 = 'Hi';

str4[0] = 'h'; // error
alert( str4[0] ); // doesn't work









let str5 = 'Hi';

str5 = 'h' + str5[1]; // replace the string

alert( str5 ); // hi









alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface









alert( 'Interface'[0].toLowerCase() ); // 'i'






let str6 = 'Widget with id';

alert( str6.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str6.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str6.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)







let str7 = 'Widget with id';

alert( str7.indexOf('id', 2) ) // 12










let str8 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str8.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}






let str9 = "As sly as a fox, as strong as an ox";
let target1 = "as";

let pos1 = -1;
while ((pos1 = str9.indexOf(target1, pos1 + 1)) != -1) {
  alert( pos1 );
}









let str10 = "Widget with id";

if (str10.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}








let str11 = "Widget with id";

if (str11.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}







alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false







alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"








alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"








let str12 = "stringify";
alert( str12.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str12.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0







let str13 = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end






let str14 = "stringify";
alert( str14.slice(2) ); // 'ringify', from the 2nd position till the end








let str15 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str15.slice(-4, -1) ); // 'gif'










let str16 = "stringify";

// these are same for substring
alert( str16.substring(2, 6) ); // "ring"
alert( str16.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str16.slice(2, 6) ); // "ring" (the same)
alert( str16.slice(6, 2) ); // "" (an empty string)







let str17 = "stringify";
alert( str17.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters








let str18 = "stringify";
alert( str18.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters







alert( 'a' > 'Z' ); // true








alert( 'Österreich' > 'Zealand' ); // true







// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)








alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)





let str19 = '';

for (let i = 65; i <= 220; i++) {
  str19 += String.fromCodePoint(i);
}
alert( str19 );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ







alert( 'Österreich'.localeCompare('Zealand') ); // -1








// task 1
let newStr = str[0].toUpperCase() + str.slice(1);




function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John




// task2

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );








// task3

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}







// task4
function extractCurrencyValue(str) {
  return +str.slice(1);
}












