let params = [ "hello", true, 7 ];
let other = [ 1, 2, ...params ]; // [ 1, 2, "hello", true, 7 ]
console.log(other);

let f = (x, y, ...a) =>(x + y) * a.length;

console.log(f(1, 2, ...params));

let str = "foo";
let chars = [ ...str ]; // [ "f", "o", "o" ]
console.log(chars);