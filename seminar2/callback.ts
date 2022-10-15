console.log("Raeady... ");

setTimeout((): void => {
  console.log("Set ...");
}, 3000);

console.log("Go !");

//Ready 출력 후 바로 Go 출력되고 3초 있다가 Set 출력됨
//이런 콜백함수는 잘 사용하지 않음. 많이 사용하면 어떻게 동작되는지 이해하기 힘들고 코드가 너무 길어짐
//-> 문제 해결을 위해 promise가 등장함
