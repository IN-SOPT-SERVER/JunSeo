import { Request, Response } from "express";
import { rateService } from "../service";

const getRateOfContent = async (req: Request, res: Response) => {
    const { contentId } = req.params;
    const data = await rateService.getRateOfContent(+contentId);

    if (!data)
        return res.status(200).json({ status: 204, message: "평가 전" });

    else return res.status(200).json({ status: 200, message: "평가 가져오기 성공", data: data });
};

export default {
    getRateOfContent
};