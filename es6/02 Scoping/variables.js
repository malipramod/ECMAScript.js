let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
    let x = a[i];
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = () => i * 2
}

console.log(callbacks[0]());
console.log(callbacks[1]());
console.log(callbacks[2]());


//ES 5

// var a = [1, 2, 3, 4, 5];
// var b = [6, 7, 8, 9, 10];
// var i, x, y;
// for (i = 0; i < a.length; i++) {
//     x = a[i];
// }
// for (i = 0; i < b.length; i++) {
//     y = b[i];
// }

// var callbacks = [];
// for (var i = 0; i <= 2; i++) {
//     (function (i) {
//         callbacks[i] = function() { return i * 2; };
//     })(i);
// }