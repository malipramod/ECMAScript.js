let f = (x, y, ...a) => (x + y) * a.length;

let sumAll = (...args) => args.reduce((a, b) => a + b, 0);

console.log(f(1, 2, "hello", true, 7));
console.log(sumAll(1,2,3,4,5));
