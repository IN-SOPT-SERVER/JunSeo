import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "댓글 조회 성공",
    data: "댓글임",
  });
});

module.exports = router;
