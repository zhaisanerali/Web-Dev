let user = {
    name : "John",
    age : 30
};

user.sayHi = function(){
    alert("Hello!");
}

user.sayHi();       //Hello!



function sayHello(){
    alert("Hello!");
}


user.sayHello = sayHello;
user.sayHello();



user = {
    sayHi : function(){
        alert("Hello");
    }
};


user = {
    sayHi(){
        alert("Hello");
    }
};




let user = {
    name : "John",
    age : 30,
    sayHi(){
        alert(this.name);
    }
};

user.sayHi(); //John









let user = {
    name : "John",
    age : 30,
    sayHi(){
        alert(user.name);          //"user" instead of "this"
    }
};






let user = {
    name : "John",
    age : 30,

    sayHi(){
        alert(user.name);       //leads to an error
    }
};



let admin = user;
user = null;                     // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null





//There’s no syntax error in the following example:
function sayHi(){
    alert(this.name);
}







let user = {name : "John"};
let admin1 = {name : "Admin"};

function sayHi(){
    alert(this.name);
}
 

user.f = sayHi;
admin.f = sayHi;



user.f();
admin.f();


admin['f']();








function sayHi(){
    alert(this);
}
sayHi();    //undefined









let user = {
    firstName : "Ilya",
    sayHi(){
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();      //Ilya








// task 1
function makeUser(){
    return {
        name : "John",
        ref : this
    };
}

let user = makeUser();

alert(user.ref.name);            // What's the result?


// an error

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John











// task  2
let calculator = {
    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a + this.b;
    },

    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};


calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );






// task 3
let ladder = {
    step : 0,
    up() {
        this.step++;
        return this;

    },

    down() {
        this.step--;
        return this;
    },

    showStep(){
        alert( this.step );
        return this;
    }

}















