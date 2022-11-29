import { Prisma } from "@prisma/client";
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
    return res.status(201).json({ status: 201, message: "평가 완료", data: data });
};

const deleteRate = async (req: Request, res: Response) => {
    const { contentId } = req.params;

    try {
        const result = await rateService.deleteRate(+contentId);
        if (result) return res.status(200).json({ status: 200, message: "평가 삭제 성공", data: result });

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError)
            //? 삭제할 데이터가 존재하지 않을 때 발생하는 에러 코드
            if (error.code === "P2025")
                return res.status(404).json({ status: 404, message: "삭제할 평가가 존재하지 않습니다" });
            else
                return res.status(500).json({ status: 500, message: error.message });
    }

    return res.status(500).json({ status: 500, message: "평가 삭제 실패" });
}

export default {
    getRateOfContent,
    postRate,
    deleteRate,
};