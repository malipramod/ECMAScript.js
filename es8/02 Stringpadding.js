let str="es8";

console.log(str.padStart(2));          // 'es8'
console.log(str.padStart(5));          // '  es8'
console.log(str.padStart(6, 'woof'));  // 'wooes8'
console.log(str.padStart(14, 'wow'));  // 'wowwowwowwoes8'
console.log(str.padStart(7, '0'));     // '0000es8'
console.log(str.padEnd(2));          // 'es8'
console.log(str.padEnd(5));          // 'es8  '
console.log(str.padEnd(6, 'woof'));  // 'es8woo'
console.log(str.padEnd(14, 'wow'));  // 'es8wowwowwowwo'
console.log(str.padEnd(7, '6'));     // 'es86666'