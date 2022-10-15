const me = (callback: () => void, time: number) => {
  setTimeout(callback, time);
  //callback 함수를 time 시간 지나고 실행
};

//일어나는 함수
//Promise 객체를 리턴 (Promise 객체는 me 함수를 호출)
const wakeUp = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 잉어남");
      resolve("일어남");
    }, 1000);
  });
};

//이전에 일어났던 상태(now)를 매개변수로 받음
//promise 객체 생성하고 me 호출
const goBathRoom = (now: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 화장실로 이동함");
      resolve(`${now} -> 화장실로 이동함`);
    }, 1000);
  });
};

//* 칫솔과 치약을 준비함
const ready = (now: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 칫솔과 치약을 준비함");
      resolve(`${now} -> 칫솔과 치약을 준비함`);
    }, 1000);
  });
};

//* 양치함
const startChikaChika = (now: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 양치함");
      resolve(`${now} -> 양치함`);
    }, 1000);
  });
};

//* 나 자신에게 칭찬함
const goodJob = (now: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    me(() => {
      console.log("[현재] 나 자신에게 칭찬중");
      resolve(`${now} -> 칭찬중`);
    }, 1000);
  });
};

//resolve를 통해 now라는 이름으로 받은 걸 goBathRoom으로 보내
//now가 함수 호출되면서 점점 문자열이 붙어서 길어져
//앞의 함수가 던져준 값을 가지고 뒤에 promise 함수를 더 호출
wakeUp()
  .then((now) => goBathRoom(now))
  .then((now) => ready(now))
  .then((now) => startChikaChika(now))
  .then((now) => goodJob(now))
  .then((now) => console.log(`\n${now}`));

//Promise는 코드가 복잡해보이고 어렵다는 단점이 있음
