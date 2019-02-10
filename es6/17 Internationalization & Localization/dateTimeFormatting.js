var l10nEN = new Intl.DateTimeFormat("en-US")
var l10nDE = new Intl.DateTimeFormat("de-DE")
console.log(l10nEN.format(new Date("2019-02-11")) === "2/11/2019")   //True 
console.log(l10nDE.format(new Date("2019-02-11")) === "2.11.2019")   //False "2/11/2019"