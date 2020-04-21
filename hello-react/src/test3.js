// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
function x() {
    y = 1;     // Throws a ReferenceError in STRICT mode.
    var z = 2;
}

x();

console.log(y); // 1
console.log(z); // Throws a ReferenceError: z is not defined outside x.
