import { Request, Response } from "express";
import { userService } from "../service";

//~ 유저 생성
const createUser = async (req: Request, res: Response) => {
  //? request의 json 필드 명과 변수 명이 같으면
  //? const { name, email, age } = req.body
  //? 이렇게 코드를 작성할 수 있음  => 비구조화할당

  const { userName, email, age } = req.body;
  //? 필요한 데이터가 오지 않았을 때 처리가 필요함
  if (!userName || !email || !age) {
    return res.status(400).json({ status: 400, message: "user create fail" });
  }

  const data = await userService.createUser(userName, email, age);
  if (!data) {
    return res.status(400).json({ status: 400, message: "user create fail" });
  }
  return res.status(200).json({ status: 200, message: "user create success", data });
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  //? userId 앞에 +붙인 이유? string으로 들어온 숫자를 number로 형변환 Number() 사용을 피할 수 있는 꼼수
  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//~ 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();

  return res.status(200).json({ status: 200, message: "get all users success", data });
};

//~ 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;
  if (!name) return res.status(400).json({ status: 400, message: "user update fail" });

  const updatedUser = await userService.updateUser(+userId, name);
  return res.status(200).json({ status: 200, message: "user update success", updatedUser });
};

//~ 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "user delete success" });
};

const userController = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userController;
