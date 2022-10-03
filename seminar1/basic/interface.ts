interface SOPT {
  name: string;
  age: number;
  isSOPT: boolean;
  money?: number; //선택적 프로퍼티로 이게 할당되지 않아도 오류 안 남 필수 값 X
}

//SOPT 인터페이스의 프로퍼티가 하나라도 선언이 안되어있으면 오류남
const introduce: SOPT = {
  name: "정준서",
  age: 23,
  isSOPT: true,
};

const introduces: SOPT[] = [
  {
    name: "정준서",
    age: 23,
    isSOPT: true,
  },
  {
    name: "정준서2",
    age: 20,
    isSOPT: false,
  },
];
