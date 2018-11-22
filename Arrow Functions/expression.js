let evenNumberArray = [2,4,6,8,10,12,14];

odds  = evenNumberArray.map(v => v + 1);
pairs = evenNumberArray.map(v => ({ even: v, odd: v + 1 }));
nums  = evenNumberArray.map((v, i) => v + i);

console.log(`Results:
        Odds: ${odds}  
        Pairs: ${JSON.stringify(pairs)}           
        Nums:${nums}`);


//ES5

//var evenNumberArray = [2,4,6,8,10,12,14];
// odds = evenNumberArray.map(function (v) { return v + 1 })
// pairs = evenNumberArray.map(function (v) { return { even: v, odd: v + 1 } })
// nums = evenNumberArray.map(function (v, i) { return v + i })

// console.log("Results:"+
//         "\n\tOdds:"+ odds  
//         +"\n\tPairs:"+JSON.stringify(pairs)           
//         +"\n\tNums:"+nums);