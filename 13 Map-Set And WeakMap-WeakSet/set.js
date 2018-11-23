let s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));
for (let key of s.values()) 
    console.log(key);