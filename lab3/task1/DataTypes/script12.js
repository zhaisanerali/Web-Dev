let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}










let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/





// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

















let user1 = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user1) ); // {} (empty object)













let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

alert( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/









let room = {
  number: 23
};

let meetup1 = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup1.place = room;       // meetup references room
room.occupiedBy = meetup1; // room references meetup

JSON.stringify(meetup1); // Error: Converting circular structure to JSON














let json1 = JSON.stringify(value[ replacer, space])









let room = {
  number: 23
};

let meetup2 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup2; // room references meetup

alert( JSON.stringify(meetup2, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}




let room = {
  number: 23
};

let meetup3 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup3; // room references meetup

alert( JSON.stringify(meetup3, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/








let room = {
  number: 23
};

let meetup4 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup4; // room references meetup

alert( JSON.stringify(meetup4, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/










let user2 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user2, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/







let room = {
  number: 23
};

let meetup5 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup5) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/









let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup6 = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup6) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/





let value = JSON.parse(str[ reviver]);














// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1












let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user3 = JSON.parse(userData);

alert( user3.friends[1] ); // 1









let json2 = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;














// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';







// …And now we need to deserialize it, to turn back into JavaScript object.

// Let’s do it by calling JSON.parse:

let str1 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup7 = JSON.parse(str1);

alert( meetup7.date.getDate() ); // Error!










let str2 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup8 = JSON.parse(str2, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup8.date.getDate() ); // now works!










let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // works!















// task1
let user5 = {
  name: "John Smith",
  age: 35
};

let user6 = JSON.parse(JSON.stringify(user5));








// task 2
let room = {
  number: 23
};

let meetup9 = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup9;
meetup9.self = meetup9;

alert( JSON.stringify(meetup9, function replacer(key, value) {
  return (key != "" && value == meetup9) ? undefined : value;
}));

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
