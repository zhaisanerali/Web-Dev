let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory







let john1 = { name: "John" };

let array = [ john1 ];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]




let john2 = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()





let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object








let john3 = { name: "John" };

let weakMap1 = new WeakMap();
weakMap1.set(john, "...");

john3 = null; // overwrite the reference

// john is removed from memory!




weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically






// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}






// 📁 main.js
let john4 = { name: "John" };

countUser(john4); // count his visits

// later john leaves us
john = null;






// 📁 visitsCount.js
let visitsCountMap1 = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap1.get(user) || 0;
  visitsCountMap1.set(user, count + 1);
}







// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj1 = {/* let's say we have an object */};

let result1 = process(obj1); // calculated

// ...later, from another place of the code...
let result2 = process(obj1); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)








// 📁 cache.js
let cache1 = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache1.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache1.set(obj, result);
    return result;
  }

  return cache1.get(obj);
}

// 📁 main.js
let obj2 = {/* some object */};

let result_1 = process(obj);
let result_2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well




let visitedSet = new WeakSet();

let john5 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john5); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john5)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically






// task1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)




// the symbolic property is only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;






// task 2
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later







