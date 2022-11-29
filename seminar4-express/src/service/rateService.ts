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

export default { getRateOfContent };