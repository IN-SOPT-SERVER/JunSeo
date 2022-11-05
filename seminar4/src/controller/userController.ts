import { Request, Response } from "express";
import { userService } from "../service";

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//~ 유저 생성
const createUser = async (req: Request, res: Response) => {};

//~ 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {};

//~ 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {};

//~ 유저 삭제
const deleteUser = async (req: Request, res: Response) => {};

const userController = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userController;
