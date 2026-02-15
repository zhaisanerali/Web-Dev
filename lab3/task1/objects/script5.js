let user = {};                      // a user without "address" property
alert( user.address.street);        //error





let html = document.querySelector('.elem').innerHTML;      //erreo if it is null


let user1 = {};
alert(user.address ? user.address.street : undefined);




let html1= document.querySellector('.elem') ? document.querySelector('.elem').innerHTML : null;
/*1. Что такое document.querySelector('.elem')?
Это команда поиска.

document: обращение ко всей твоей веб-странице.

querySelector: метод, который ищет первый попавшийся элемент, подходящий под описание.

'.elem': это CSS-селектор. Точка в начале означает, что мы ищем элемент с классом elem (например, <div class="elem">...</div>).*/



let user3 = {}; // user has no address

alert(user3.address ? user.address.street ? user.address.street.name : null : null);





let user4 = {}; // user has no address

alert( user4?.address?.street ); // undefined (no error)





let user5 = null;

alert( user5?.address ); // undefined
alert( user5?.address.street ); // undefined



// ReferenceError: user is not defined
user?.address;





let user6 = null;
let x = 0;

user6?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented





let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)











let key = "firstName";

let user7 = {
  firstName: "John"
};

let user8 = null;

alert( user7?.[key] ); // John
alert( user8?.[key] ); // undefined






delete user?.name; // delete user.name if user exists





let user9 = null;

user9?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"