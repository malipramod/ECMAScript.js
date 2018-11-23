//Shallow Matching
let { op, lhs, rhs } = shallowMatching();
console.log({ op, lhs, rhs });
console.log("Shallow: "+lhs,op,rhs);

function shallowMatching(){
    return {
       "op":"+",
       "lhs":"10",
       "rhs":"20" 
    };
}

//Deep Matching
var { op: a, lhs: { op: b }, rhs: c } = deepMatching();
console.log("Deep:" + JSON.stringify({ op: a, lhs: { op: b }, rhs: c }));

console.log("Deep: " + lhs, op, rhs);
function deepMatching(){
    return {
       "op":"+",
       "lhs":{"op":"10"},
       "rhs":"20" 
    };
}

