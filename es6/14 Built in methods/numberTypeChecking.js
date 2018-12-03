console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(123));

console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(9007199254740992));