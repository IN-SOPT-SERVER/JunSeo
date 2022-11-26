import { S3Client } from "@aws-sdk/client-s3";
//? @aws-sdk/client-s3에서 제공하는 여러 메서드를 담은 객체(S3Client)를 생성함

import config from ".";

const s3: S3Client = new S3Client({
    region: "ap-northeast-2",
    credentials: {
        //? dotenv를 활용해서 config로 쉽게 접근 가능
        accessKeyId: config.s3AccessKey,
        secretAccessKey: config.s3SecretKey,
    },
});

export default s3;