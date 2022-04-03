import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import ShortUniqueId from "short-unique-id";
import { CreateShortUrlRequest } from "../../../types/rest";

const prisma = new PrismaClient()
const uid = new ShortUniqueId({ length: 10 });

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug, targetUrl } = req.body as CreateShortUrlRequest;
    if (!targetUrl) {
        res.status(400).end('targetUrl must not be empty.');
        return;
    }

    const actualSlug = slug ? slug : uid();

    const response = await prisma.short_url.create({
        data: {
            target_url: targetUrl,
            slug: actualSlug,
        }
    });

    res.status(201).json(response);
}

const handlers = [
    {
        method: 'POST',
        handle: post,
    },
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req

    const handler = handlers.find(handler => handler.method === method)

    if (!handler) {
        res.setHeader('Allow', handlers.map(handler => handler.method))
        res.status(405).end(`Method ${method} Not Allowed`)
        return;
    }

    await handler.handle(req, res);

}

