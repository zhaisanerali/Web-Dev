let message = "hello";
let phrase = message;


let user = {
    name : "John"
}

let admin = user;

admin.name = "Pete";

alert(user.name);





let a = {};
let b = a;
alert(a == b);      //true, both variables references the same object
alert(a === b);     //true 




let a1 = {};
let b1 = {};

alert(a1 == b1 );    // false


const user1 = {
    name : "John"
}

user1.name = "Pete";
alert(user1.name);     //Pete;





let user2 = {
    name : "John",
    age : 30
};

let clone = {};

for (let key in user2){
    clone[key] = user[key];
}


clone.name = "Pete";
alert(user2.name);      //stilll John in the original object








let user3 = {
    name : "John"
};


let permissions1 = {canView : true};
let permissions2 = {canEdit : true};

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

 
alert(user3.name);                //John
alert(user3.canView);              // true
alert(user3.canEdit);              //true







let user4 = {
    name : "John",
    age : 30
};

let clone = Object.assign({},user4);

alert(clone.name);    //John
alert(clone.age);     //30






let user5 = {
    name : "John",
    sizes : {
        width : 50,
        height : 182
    }
};
alert( user5.sizes.height);       // 182





let user6 = {
    name : "John ",
    sizes : {
        width : 50,
        height : 182
    }
};
let clone = Object.assign({}, user6);

alert( user.sizes === clone.sizes );           // true, same object


user6.sizes.width = 60;           // change a property from one place
alert(clone.sizes.width);         // 60, get the result from the other one





let user7 = {
    name : "John",
    sizes : {
        height : 182,
        width : 50
    }
};

let clone = structuredClone(user7);
alert(user7.sizes == clone.sizes);         //false, different objects



// user and clone are totally unrelated now
user7.sizes.width = 60;              // change a property from one place

alert(clone.sizes.width);            // 50, not related










let user8 = {};

user8.me = user;

let clone = structuredClone(user8);
alert(clone.me === clone );        //true



//error

structuredClone({
    f : function(){}
});











