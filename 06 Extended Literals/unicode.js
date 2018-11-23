console.log("𠮷".length);
console.log("𠮷".match(/./u)[0].length);
console.log("𠮷" === "\uD842\uDFB7");
console.log("𠮷" === "\u{20BB7}");
console.log("𠮷".codePointAt(0) == 0x20BB7);
for (let codepoint of "𠮷") 
    console.log(codepoint)