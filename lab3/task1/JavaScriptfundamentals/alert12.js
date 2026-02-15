result = (a !== null && a !== undefined ) ? a : b;


let user;
alert(user ?? "Anonymous");        // ANonymous (user is undefned)


let user1 = "John";
alert(user1 ?? "ANonymous");       //John (user1 is not null/undefined)
//We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.




let firstname = null;
let lastname = null;
let nickName = "Supercoder";
//shows the first defined value:
alert(firstname ?? lastname ?? nickName ?? "Anonymous");     //SuperCoder






//shows the first truthy value
alert(firstname || lastname || nickName || "Anonymous");    //Supercoder





let height = 0;

alert(height || 100);      //100
alert(height ?? 100);      //0



let height1 = null;
let width = null;
let area = (height ?? 100) * (width ?? 50) 
alert(area);     //100 * 50 = 5000




let area1 = height ?? 100 * width ?? 50;   
// 1.  100*width = 100 * null = 100 * 0 = 0
// 2.  height ?? 0 ?? 50
// 3.  0 ?? 50
// 4.  0




// let x = 1 && 2 ?? 3;    this is syntax error


let x = (1 && 2) ?? 3; // Works

alert(x); // 2




height = 100;
height = height ?? 100;






