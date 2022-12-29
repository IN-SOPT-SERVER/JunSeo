import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { userService } from "../service";
import { rm, sc } from "../constants";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { fail, success } from "../constants/response";
import jwtHandler from "../modules/jwtHandler";
import { UserSignInDTO } from "../interfaces/UserSignInDTO";

//~ 유저 생성
const createUser = async (req: Request, res: Response) => {
  //? validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }
  //? 기존 비구조화 할당 방식 -> DTO의 형태
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL));
  }

  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };
  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result));
};

//~ 로그인
const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const data = await userService.signIn(userSignInDto);

    if (!data) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    else if (data === sc.UNAUTHORIZED)
      return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));

    const accessToken = jwtHandler.sign(data);

    const result = {
      id: data,
      accessToken,
    };

    res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
  } catch (e) {
    console.log(error);
    //? 서버 내부에서 오류 발생
    res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  //? userId 앞에 +붙인 이유? string으로 들어온 숫자를 number로 형변환 Number() 사용을 피할 수 있는 꼼수
  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
  }
  return res.status(sc.OK).send(success(sc.OK, rm.READ_USER_SUCCESS, data));
};

//~ 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();

  return res.status(sc.OK).send(success(sc.OK, rm.READ_ALL_USERS_SUCCESS, data));
};

//~ 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId } = req.params;
  if (!name) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));

  const updatedUser = await userService.updateUser(+userId, name);
  return res.status(sc.OK).send(success(sc.OK, rm.UPDATE_USER_SUCCESS, updatedUser));
};

//~ 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(+userId);
  return res.status(sc.OK).send(success(sc.OK, rm.DELETE_USER_FAIL));
};

const userController = {
  getUserById,
  signInUser,
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};

export default userController;
