console.log(0.1 + 0.2 === 0.3);     //0.30000000000000004 === 0.3
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);   //5.551115123125783e-17 < 2.220446049250313e-16

console.log(Math.trunc(42.7));
console.log(Math.trunc( 0.1));
console.log(Math.trunc(-0.1));

console.log(Math.sign(7));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-7));
console.log(Math.sign(NaN));