{
    function foo() { return "Outer Function"; }
    console.log(foo());
    {
        function foo() { return "Inner Function"; }
        console.log(foo());
    }
    console.log(foo());
}

//ES 5

// (function () {
//     var foo = function () { "Outer Function"; }
//     console.log(foo());
//     (function () {
//         var foo = function () { "Inner Function"; }
//         console.log(foo());
//     })();
//     console.log(foo());
// })();