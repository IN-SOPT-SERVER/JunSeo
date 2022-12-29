import { Router } from "express";
import { upload } from "../middlewares";
import { imageController } from "../controller";
const router: Router = Router();

//? 미들웨어에서 이미지를 가져가서 sc 버킷 내에 이미지를 저장함 그리고 객체 url을 넘겨줌
router.post('/', upload.single('file'), imageController.uploadImage);
//? multer의 single 메서드 => 단일 파일 가져올 때
//? multer의 array 메서드 => 여러개 배열로 가져올 때

export default router;