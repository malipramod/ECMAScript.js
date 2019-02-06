let numbers = [1, 2, 3, 4,NaN];
if(numbers.includes(2)) {
    console.log('Array contains value');
  }

console.log(numbers.indexOf(NaN)); //Prints -1
console.log(numbers.includes(NaN)); //Prints true


//ES5
// if(numbers.indexOf(2) !== -1) {
//     console.log('Array contains value');
//   }