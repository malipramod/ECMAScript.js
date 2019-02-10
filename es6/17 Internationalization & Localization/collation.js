// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = ["ä", "a", "z"]
var l10nDE = new Intl.Collator("de")    //German
var l10nSV = new Intl.Collator("sv")    //Swedish 
console.log(l10nDE.Collator);
console.log(l10nDE.compare("ä", "z") === -1)
console.log(l10nSV.compare("ä", "z") === +1)
console.log(list.sort(l10nDE.compare)) // [ "a", "ä", "z" ]
console.log(list.sort(l10nSV.compare)) // [ "a", "z", "ä" ]