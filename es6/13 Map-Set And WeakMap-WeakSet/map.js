//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let m = new Map();
let s = Symbol();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s));
console.log(m.size);
for (let [key, val] of m.entries())
    console.log(key , " = " , val);

  