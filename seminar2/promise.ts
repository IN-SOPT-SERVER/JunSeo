//Promise의 3가지 단계
//1. Pending(대기) - 비동기 처리가 완료되지 않은 상태
//2. Fullfiled(이행) - 비동기 처리가 완료되어 Promise 결과를 반환
//3. Rejected(실패) - 비동기 처리 도중 실패했거나 오류가 발생함

const condition: boolean = false;

//최초 생성 시점
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("우와 Promise다!");
  } else {
    //비동기 처리 도중 에러가 발생해서 실패한 경우
    //new Error(에러 메시지) == 에러 객체 생성
    reject(new Error("비동기 처리 도중 실패!"));
  }
});

//비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
  .then((resolvedData): void => console.log(resolvedData))
  .catch((error): void => console.log(error.message));
