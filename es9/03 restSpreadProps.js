const values = {a: 1, b: 2, c: 3, d: 4};
const {a, ...n} = values;
console.log(a);   // prints 1
console.log(n);   // prints {b: 2, c: 3, d: 4}