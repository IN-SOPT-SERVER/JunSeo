import { Router } from "express";
import { rateController } from "../controller";

const router: Router = Router();

//~ 평가 가져오기
//! GET api/rate/:contentId
router.get("/:contentId", rateController.getRateOfContent);

//~ 평가 등록하기
//! POST api/rate/:contentId
router.post("/:contentId", rateController.postRate);

//~ 평가 삭제하기
//! POST api/rate/:contentId
router.delete("/:contentId", rateController.deleteRate);

//~ 평가 수저하기
//! PATCH api/rate/:contentId
router.patch("/:contentId", rateController.patchRate);

export default router;
