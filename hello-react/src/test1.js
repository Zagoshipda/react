// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
var x = 1;

if (x === 1) {
  var x;
  console.log(x); // 1

  x = 3;
  console.log(x); // 3

  var x = 2;
  console.log(x); // 2

  var x;
  var y;
}
console.log('--- out');
console.log(x);   // 2
console.log(y);   // undefined

y = 9;
console.log(y); // 9

var y;
console.log(y); // 9



console.log('... variable scope == function scope');
(function() {
  var x = 11;
  console.log(x); // 11
  z = 777;
})();

console.log(x);   // 2
console.log(z);   // 777 : assigning a value to an undeclared variable implicitly creates it as a global variable (it becomes a property of the global object) when the assignment is executed.

var z;
console.log(z); // 777

z = -3;
console.log(z); // -3


console.log('testing global variable...');
(function(){
  var z;
  console.log(z); // undefined

  z = 1;
  console.log(z); // 1
})();

console.log(z); // -3

