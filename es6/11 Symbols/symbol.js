const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);

console.log(symbol3.toString());

console.log(Symbol('foo') === Symbol('foo'));


var myObj = {};

var fooSym = Symbol('foo');
console.log(fooSym);
var otherSym = Symbol('bar');

myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';

console.log(myObj.foo === 'bar');
console.log(myObj[fooSym] === 'baz');
console.log(myObj[otherSym] === 'bing');