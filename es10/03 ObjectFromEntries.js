const obj = {
    an: 'apple',
    a: 'day',
    keeps: 'doctor away'
};

const entries = Object.entries(obj);
console.log(entries);                       //[ [ 'an', 'apple' ], [ 'a', 'day' ], [ 'keeps', 'doctor away' ] ]
console.log(Object.fromEntries(entries));   //{ an: 'apple', a: 'day', keeps: 'doctor away' }

// //< ES10
// Object.fromEntriesCustom = entries => Object.assign({}, ...Array.from(entries, ([k, v]) => ({ [k]: v })));
// console.log(Object.fromEntriesCustom(entries))