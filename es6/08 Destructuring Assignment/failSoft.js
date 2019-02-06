var list = [ 7, 42 ];
var [ a = 1, b = 2, c = 3, d ] = list;
console.log({a,b,c,d}); //{ a: 7, b: 42, c: 3, d: undefined }