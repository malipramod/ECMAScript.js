const arr = [1,2,3,4,5]
console.log(arr.map(x=>[x,x*2]));           //[[1,2],[2,4],[3,6],[4,8],[5,10]]
console.log(arr.flatMap(x=>[x,x*2]));       //[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// // <ES-10
// const flatMap = (f,arr) => arr.reduce((acc,x) => acc.concat(f(x)), [])
// console.log(flatMap(x => [x, x*2], arr))