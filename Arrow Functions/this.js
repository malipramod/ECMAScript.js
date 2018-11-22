
this.nums =[1,5,10,15,25,7];
this.fives=[];
this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v);
});
let fives=[100,200,300];
console.log("this.fives:"+this.fives);
console.log("local fives:"+fives);



//ES 5

//  variant 1
// var self = this;
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         self.fives.push(v);
// });

//  variant 2
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         this.fives.push(v);
// }, this);

//  variant 3 (since ECMAScript 5.1 only)
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         this.fives.push(v);
// }.bind(this));