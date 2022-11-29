import { Request, Response } from "express";
import { rateService } from "../service";

const getRateOfContent = async (req: Request, res: Response) => {
    const { contentId } = req.params;
    const data = await rateService.getRateOfContent(+contentId);

    if (!data)
        return res.status(200).json({ status: 204, message: "평가 전" });

    else return res.status(200).json({ status: 200, message: "평가 가져오기 성공", data: data });
};

const postRate = async (req: Request, res: Response) => {
    const { contentId } = req.params;
    const rate: string = req.body.rate;

    if (!rate)
        return res.status(400).json({ status: 400, message: "평가하기 실패" });

    const data = await rateService.postRate(+contentId, rate);
    if (!data)
        return res.status(500).json({ status: 500, message: "평가하기 실패" });
    return res.status(201).json({ status: 201, message: "평가 완료", data });
};

export default {
    getRateOfContent,
    postRate,
};