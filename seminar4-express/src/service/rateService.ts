import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getRateOfContent = async (contentId: number) => {
    const data = await prisma.rate.findFirst({
        select: {
            contentId: true,
            rate: true,
        },
        where: {
            contentId: contentId,
        },
    });

    return data;
}

const postRate = async (contentId: number, rate: string) => {

    const data = await prisma.rate.create({
        data: {
            contentId: contentId,
            rate: rate,
        },
    });

    return data;
}

export default {
    getRateOfContent,
    postRate,
};