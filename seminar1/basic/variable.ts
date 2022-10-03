const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`);

const str: string = "heloooo!";
console.log(`${typeof str}, ${str}`);

const test2: number = 4;
console.log(`${typeof test2}, ${test2}`);

//넘버 타입 변수에다가 스트링을 넣을 수 없기 때문에 빨간 줄이 생김 -> 변수의 타입을 바꾸거나 저장을 넘버로 하거나
// const test3: number = 'hello';

//배열 안의 요소 타입까지 알려줘야됨
const aaa: number[] = [1, 2, 3];
//넘버 배열 안에 스트링 넣으면 오류
//const aaaa: number[] = [1, 2, 'hello'];

//배열 안에 들어가는 요소의 타입을 지정 위에랑 같은 거
const arr3: Array<String> = ["Hi", "hello"];

/**** Object vs object ****/
//Object: js의 객체 object: ts의 객체 (원시 타입을 제외한 것이 들어갈 수 있다) 소문자가 더 엄격함

const foo1 = (a: Object) => {
  console.log(a);
  //js의 Object
};

const foo2 = (a: object) => {
  console.log(a);
  //ts의 object 원시 타입을 제외한 것만 들어갈 수 잇음
};

foo1("hello"); //대문자 Object 출력 잘 됨
//string은 원시 타입이므로 object에 넣을 수 없음
//오류 발생 foo2("hello");

/***** 함수 타입 *****/
//함수에도 리턴 타입을 명시해줘야돼.
//아무것도 리턴 안 하면 void
const helloo = (name: string): void => {
  console.log(`${name}아 안녕`);
};

//리턴 값이 넘버임
const summ = (a: number, b: number): number => {
  return a + b;
};

//null & undefined는 그 자체로 타입

/*******************/
/***** 타입 단언 *****/
/*******************/
//좋은 방법은 아니지만 불가피한 상황이 나올 수도 있어
//as
const test11: any = "정준서";
//const nameLength = test11.length; ==> test11입력하고 . 입력하면 string의 내장 메소드를 보여줘야되는데 지금 any로 되어있어서 안 보여줌 나만 이게 스트링인 걸 알고 있어
const nameLength = (test11 as string).length; //test11 as string을 활용해서 이게 스트링인 거를 단언함으로써 해당 내장 메소드들을 보여줌 -> openAPI에서 리턴하는 값의 타입을 단언할 때 자주 사용함.

//angle-bracket
const test12: any = "정준서";
const nameLnegth2 = (<string>test12).length;
