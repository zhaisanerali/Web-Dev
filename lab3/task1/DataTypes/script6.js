let range = {
  from: 1,
  to: 5
};

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5






let range1 = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range1[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range1) {
  alert(num); // 1, then 2, 3, 4, 5
}





let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range2) {
  alert(num); // 1, then 2, 3, 4, 5
}






for (let char of "test") {
  // triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}






let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}





let str1 = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str1[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}





let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
for (let item of arrayLike) {}






let arrayLike1 = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr2 = Array.from(arrayLike1); // (*)
alert(arr2.pop()); // World (method works)






// assuming that range is taken from the example above
let arr3 = Array.from(range);
alert(arr3); // 1,2,3,4,5 (array toString conversion works)


// The full syntax for Array.from also allows us to provide an optional “mapping” function:
// Array.from(obj[, mapFn, thisArg])





// assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25






let str2 = '𝒳😂';

// splits str into array of characters
let chars2 = Array.from(str2);

alert(chars2[0]); // 𝒳
alert(chars2[1]); // 😂
alert(chars2.length); // 2






let str3 = '𝒳😂';

let chars3 = []; // Array.from internally does the same loop
for (let char of str3) {
  chars3.push(char);
}

alert(chars3);






function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str4 = '𝒳😂𩷶';

alert( slice(str4, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
alert( str4.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)










