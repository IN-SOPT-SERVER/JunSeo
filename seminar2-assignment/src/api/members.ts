import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "멤버 조회 성공",
    data: {
      members: [
        {
          name: "김도연",
          mbti: "ISTP",
          like: "된장찌개",
          address: "대신동",
          age: 23,
          hobby: "배드민턴",
        },
        {
          name: "김경린",
          mbti: "ISFJ",
          like: "초밥",
          address: "일산",
          age: 24,
          hobby: "산책",
        },
        {
          name: "정준서",
          mbti: "ENFP",
          like: "쌀국수",
          address: "잠실",
          age: 23,
          hobby: "노래",
        },
      ],
    },
  });
});

module.exports = router;
