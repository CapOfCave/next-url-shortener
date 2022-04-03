import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { delegate, EndpointHandler } from "../../../lib/api-lib";

const prisma = new PrismaClient()

export const getShortUrlBySlug = async (slug: string) => {
    return await prisma.short_url.findUnique({
        where: {
            slug
        },
        rejectOnNotFound: true
    })
}

const get = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query
    const shortUrl = await getShortUrlBySlug(slug as string);
    res.status(200).json(shortUrl);
}

const handlers: EndpointHandler[] = [
    {
        method: 'GET',
        handle: get,
    },
]

export default delegate(handlers);

