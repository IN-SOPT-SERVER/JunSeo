//파트원을 소개해주는 코드 작성하기
const members: Server[] = [
  {
    name: "정준서",
    age: 23,
    address: "잠실새내역",
    like: "쌀국수",
    mbti: "ENFP",
    school: "성신여자대학교",
  },
  {
    name: "조예슬",
    age: 24,
    address: "잠실새내역",
    like: "고양이",
    mbti: "ENFP",
    school: "성신여자대학교",
  },
  {
    name: "박수린",
    age: 21,
    address: "방배역",
    like: "떡볶이",
    mbti: "ISTJ",
    school: "숭실대학교",
  },
  {
    name: "유수화",
    age: 23,
    address: "공덕역",
    like: "강아지",
    mbti: "ENFP",
    school: "숙명여자대학교",
  },
];

interface Server {
  name: string;
  age: number;
  address: string;
  like: string;
  mbti: string;
  school: string;
}

members.map((member) =>
  console.log(`저는 ${member.name}입니다. ${member.age}살이고 ${member.address}에 살아요 좋아하는 건 ${member.like}랍니닷 mbti는 ${member.mbti}구요 학교는 ${member.school}에요!`)
);
