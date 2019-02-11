//A Set is a collection of values, where each value may occur only once.

let s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));
for (let key of s.values()) 
    console.log(key);