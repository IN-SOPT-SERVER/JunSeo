/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/
interface Member {
  name: string;
  group: string;
}

interface Dinner {
  member: Member[];
  menu: string[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
}

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "정준서",
      group: "yb",
    },
    {
      name: "한유진",
      group: "ob",
    },
    {
      name: "조예슬",
      group: "yb",
    },

    {
      name: "유수화",
      group: "yb",
    },
    {
      name: "강민재",
      group: "ob",
    },
  ],
  menu: ["쌀국수", "떡볶이", "삼겹살"],

  shuffle(array: Member[]) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },

  organize(array: Member[]) {
    this.shuffle(array);

    const randomNo = Math.floor(Math.random() * this.menu.length);

    const dinnerMember: string[] = new Array();
    dinnerMember.push(array[0].name);
    dinnerMember.push(array[1].name);

    console.log(`결과 ${dinnerMember[0]}, ${dinnerMember[1]} + 메뉴: ${this.menu[randomNo]}`);
  },
};

dinner.organize(dinner.member);
