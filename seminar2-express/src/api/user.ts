// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

//express의 라우팅 시스템
const router: Router = express.Router();

// /api/user
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
  });
});

module.exports = router;
//user.ts에 있는 라우터들을 다 내보내. 어디에서든지 사용할 수 있도록 모듈화
