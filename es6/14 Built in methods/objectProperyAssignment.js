var dest = { quux: 0 };
var src1 = { foo: 1, bar: 2 };
var src2 = { foo: 3, baz: 4 };
Object.assign(dest, src1, src2);

console.log(dest.quux);
console.log(dest.foo);
console.log(dest.bar);
console.log(dest.baz);