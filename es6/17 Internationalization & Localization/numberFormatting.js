var l10nEN = new Intl.NumberFormat("en-US")
var l10nDE = new Intl.NumberFormat("de-DE")
console.log(l10nEN.format(1234567.89) === "1,234,567.89")   //True
console.log(l10nDE.format(1234567.89) === "1.234.567,89")   //False 1,234,567.89