let list = [ 1, 2, 3 ];
    console.log(`Original: ${list}`);
let [ a, , b ] = list;
    console.log(`Before: ${[a,b]}`);
[ b, a ] = [ a, b ];
    console.log(`After:  ${[a,b]}`);


