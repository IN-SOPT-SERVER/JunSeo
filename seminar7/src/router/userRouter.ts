import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

//~ 유저 이름으로 검색하기
//~ 유저 검색 필터링 걸기
//! GET api/user/search?keyword={키워드}&option={옵션}}
router.get("/search", userController.searchUserByName);

router.get("/:userId", auth, userController.getUserById);

// 유저 생성
// POST api/user
// router.post("/", userController.createUser);

//~ 유저 생성 - POST api/user
router.post(
  "/",
  [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
  userController.createUser
);

//~ 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

//~ 전체 유저 조회
//! GET api/user
router.get("/", userController.getAllUser);

//~유저 정보 업데이트
//! PATCH api/user/:userId
router.patch("/:userId", userController.updateUser);

//~ 유저 삭제
//! DELETE api/user/:userId
router.delete("/:userId", userController.deleteUser);



export default router;
