const arr = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];

console.log(arr);
console.log(arr.flat());                //[1,2,3,4,[5,6,[7,8,9]]]
console.log(arr.flat().flat());         //[1,2,3,4,5,6,[7,8,9]]
console.log(arr.flatMap(Infinity));     //[1, 2, 3, 4, 5, 6, 7, 8, 9]



// // <ES-10
// Object.defineProperty(Array.prototype, 'flat', {
//     value: function(depth = 1) {
//       return this.reduce(function (flat, toFlatten) {
//         return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
//       }, []);
//     }
// });

// console.log(
//     arr.flat(Infinity)
// );