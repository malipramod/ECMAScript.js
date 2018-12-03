const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);

console.log(symbol3.toString());

console.log(Symbol('foo') === Symbol('foo'));