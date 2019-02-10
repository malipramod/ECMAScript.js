const desc = "my symbol";
const sym = Symbol(desc);

console.log(String(sym));                       //Symbol(my symbol)
console.log(String(sym) == `Symbol(${desc})`);  //true: (Before ES10)

console.log(sym.description == desc);           //true: (ES10)