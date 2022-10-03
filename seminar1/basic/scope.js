//var => function scope
//let, const => block scope

if (true) {
  var x = "var";
  console.log("x: ", x);
}
//var는 function scope 정상적으로 호출됨
console.log("x: ", x);

if (true) {
  let y = "let";
  console.log("y: ", y);
}
//y는 출력 못 해 해당 블럭에 선언된 y가 없으니까. let, const => block scope
// console.log("y: ", y);
