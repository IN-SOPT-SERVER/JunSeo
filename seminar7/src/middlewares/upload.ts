import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config";
import s3 from "../config/s3Config";

//? 미들웨어로 사용할 multer 모듈
//? multer에서 제공하는 기본 메서드들 사용할 수 있음
const upload = multer({
    //? 실질적인 storage 는 multerS3 이용해 aws s3 로 설정
    storage: multerS3({
        s3: s3, //? scConfig에서 생성했던 sc
        bucket: config.bucketName, //? s3 bucket name 지정
        contentType: multerS3.AUTO_CONTENT_TYPE, //? mimetype은 자동으로 설정 (이미지나 jpg, png들을 Mimtype에 맞게 자동으로 설정하는 것 이 설정을 빼놓고 업로드 하게 되면 url을 눌렀을 때 탭에서 보여주는 것이 아니라 다운받아짐)
        acl: "public-read", // Access control for the file

        //? 방금 들어온 파일을 어떤 이름으로 저장할 것인지
        //? 버킷 내 이름이 같은 파일들은 하나로 인식해서 unique하게 지어야함 -> date.now 활용
        //? key는 파일 이름을 지정. 버킷 내 같은 이름의 파일은 같은 파일로 인식하기 때문에 Unique하도록!
        key: function (req: Express.Request, file: Express.MulterS3.File, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
});

export default upload;
