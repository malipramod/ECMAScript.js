let obj = { a: 1 };
let list = [1];
let { a, b = 2 } = obj;
    console.log({ a, b });
let [x, y = 2] = list;
    console.log({ x, y });