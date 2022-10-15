import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "블로그 조회 성공",
    data: "https://blog.naver.com/kjmj13",
  });
});

module.exports = router;
