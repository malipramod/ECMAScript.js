let obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2 });
obj[Symbol("c")] = 3;
console.log(obj);
console.log(Reflect.ownKeys(obj));