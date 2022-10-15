//함수 선언식
function hello(name) {
  console.log(`hello ${name}`);
}

//함수 표현식 (es6에서 등장함)
const sum = (a, b) => {
  const result = a + b;
  console.log(result);
};
//로직이 한 줄이면 return, 소괄호 생략 가능
const add = (a, b) => a + b;
//협업 중에 다른 사람이 보면 이해를 못 할 수도 있어 최대한 간단한 코드에만 줄여서 사용하기
//+ 파라미터가 하나일 때는 파라미터 자리에 있는 중괄호 빼도 됨

hello("준서");
sum(3, 4);
