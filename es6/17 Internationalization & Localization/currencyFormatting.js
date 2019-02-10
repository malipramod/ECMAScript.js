var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
console.log(l10nUSD.format(100200300.40) === "$100,200,300.40")     //true
console.log(l10nGBP.format(100200300.40) === "£100,200,300.40")     //true
console.log(l10nEUR.format(100200300.40) === "100.200.300,40 €")    //false i.e. €100,200,300.40