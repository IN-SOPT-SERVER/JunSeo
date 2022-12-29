import express, { Request, Response, Router } from "express";
const data = require("../data/data.json");

const router = Router();

router.get("/:contentId", (req: Request, res: Response) => {
  const { contentId } = req.params;
  const contentData = data[contentId];

  if (!contentData) {
    return res.status(404).json({ status: 404, message: "컨텐츠가 없습니다" });
  }
  return res.status(200).json({
    status: 200,
    message: "컨텐츠 조회 성공",
    data: contentData,
  });
});

module.exports = router;
