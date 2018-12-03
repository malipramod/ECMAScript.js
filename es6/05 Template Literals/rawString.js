function quux (strings, ...values) {
    strings[0] === "foo\n";
    strings[1] === "bar";
    strings.raw[0] === "foo\\n";
    strings.raw[1] === "bar";
    values[0] === 42;
}
console.log(quux`foo\n${ 42 }bar`);

console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar");

