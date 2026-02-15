let user = {
    name : "John"
};
alert(user.name);

user = null;
alert(user.name);


let user1 = {
    name : "John"
};
let admin = user;
user1 = null;
//…Then the object is still reachable via admin global variable, so it must stay in memory.
//  If we overwrite admin too, then it can be removed.








function marry(man, woman){
    woman.husband = man;
    man.woman = woman;
    return {
        father : man,
        mother : woman
    }
}

let family = marry({
    name : "John"
}, {
    name : "Ann"
});


delete family.father;
delete family.mother.husband;




family = null;


