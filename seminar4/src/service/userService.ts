import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//~ 유저 생성
const createUser = async (userName: String, email: String, age: number) => {
  const data = await prisma.user.create({
    data: {
      userName,
      email,
      age,
    },
    //? 데이터 속에 userName: name 으로 설정하면 db의 userName 컬럼에 name 데이터 저장할 수 있음
    //? 필드 명만 잘 맞추면 data 객체 안의 순서는 중요하지 않음
  });

  return data;
};

//~ userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

//~ 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();

  return data;
};

//~ 유저 정보 업데이트
const updateUser = async () => {};

//~ 유저 삭제
const deleteUser = async () => {};

const userService = {
  getUserById,
  getAllUser,
  updateUser,
  deleteUser,
  createUser,
};

export default userService;
