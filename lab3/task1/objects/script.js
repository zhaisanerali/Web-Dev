let user1 = new Object();      //object constructor syntax;
let user2 = {}                 // object literal syntax



let user3 = {
    name : "John",
    age : 30
};

alert(user3.name);
alert(user3.age);


user3.isAdmin = true;
alert(user3.isAdmin);



delete user3.age;


let user4 = {
    name : "Bob",
    age : 30,
    "Likes birds" : true
};

alert(user4["Likes birds"]);


user3["like birds"] = false;


let key = "Like birds";
user2[key] = true;





let user5 = {
    name: "James",
    age : 30
};

key = prompt("What do you want to know about the user?","name");
alert(user5[key]);










let user = {
  name: "John",
  age: 30
};

key = "name";
alert( user.key ) // undefined




let fruit = prompt("Which fruit to buy?", "apples");
let bag = {
    [fruit] : 5,
};
alert( bag.apple );    // 5 if fruit = "apple"





fruit = prompt("Which fruit to buy?", "apple");
bag = {};
bag[fruit] = 5;




fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};





function makeuser(name, age){
    return {
        name : name,
        age : age,
    };
}
let user6 = makeuser("Aigul", 25);
alert(user6.name);






let obj = {
    for : 1,
    let : 2,
    return: 3
};

alert(obj.for + obj.let + obj.return );       //6





obj[0] = 'test';
alert(obj["0"]);




let obj1 = {};
obj.__photo__ = 5;
alert(obj,__photo__);         // [object Object] - the value is an object, didn't work as intended





let user7 = {};
alert( user7.noSuchProperty === undefined);         




"key" in object;


let user8 = {
    name : "John",
    age : 30
};
alert("age" in user8);        //true, user8.name exists
alert("blabla" in user8);     // false, user8.blabla does not exist







let user9 = {
    age : 30
};
key = "age";
alert(key in user9);    //true






let obj2 = {
    test : undefined
};
alert(obj2.test);       //it is undefined, do no such property?
alert("test" in obj2);     //true, the property does exist!





for (key in object){
    // executes the body for each key among object properties
}





let user10 = {
    name : "John",
    age : 30,
    isAdmin : true
};
for (let key in user){
    alert(key);
    alert(user10[key]);
}



let codes = {
    "49": "Germany",
    "41": "SWitzerland",
    "44" : "Great Britain",
    "1" : "USA"
}
for (let code in codes){
    alert(code);
    alert(codes[code]);
}






// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property







let user11 = {
    name: "John",
    surname: "Smith"

};
user11.age = 25;

for (let prop in user11){
    alert(prop);
}







let codes2 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"

};
for (let code in codes2){
    alert(+codes);     //49, 41, 44, 1
}






// task 1

let user12 = {};
user12.name = "John";
alert(user12.name);
user12.surname = "Smith";
user12.name = "Pete";
alert(user12.name);
delete user12.name;
alert(user12.name);






// task 2
function isEmpty(){
    for (let key in obj){
        return false;
    }
    return true;
}


let schedule = {};

alert(isEmpty(schedule)); //true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );    //false







// task 3
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}

let sum = 0;

for (let salary in salaries){
    sum += salaries[salary];
}

alert(sum);







// task 4
let menu = {
    width : 200,
    height : 300,
    title : "My menu"
};

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);

for (let key in menu){
    alert(`${key} : ${menu[key]}`);
}