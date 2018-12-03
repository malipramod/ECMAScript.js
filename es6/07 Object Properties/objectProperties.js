let x = 0, y = 0;
let obj1 = { x, y };
console.log(obj1);


let obj2 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}
console.log(obj2);

obj3 = {
    foo (a, b) {
        return a*b;
    },
    bar (x, y) {
        return x+y;
    },
    *quux (x, y) {
        return x-y;
    }
}

console.log(obj3);

function quux(){
    return Math.floor((Math.random(1,100)*100));
}
