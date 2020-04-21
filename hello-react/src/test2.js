// https://underbleu.com/Javascript/var-keyword/
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
var a = 'a';

// function scope
function func() {
  // 지역변수로 var scope가 이미 정의되었기 때문에 지역변수로 사용된다.
  console.log('-----inside function');
  console.log(a);   // undefined, javascript only hoists declarations, NOT initializations : if a variable is declared and initialized after using it, the value before the initialization will be undefined. 
  var a = 'b'; //이게 없으면 전역변수'c'로 재할당됨
  console.log(a);   // b
  a = 'c';
  console.log(a);   // c
}
console.log(a);     // a
func();
console.log('=====outside function')
console.log(a);     // a
