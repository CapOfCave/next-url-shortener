import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { CreateShortUrlRequest } from "../../../types/rest";

const prisma = new PrismaClient()

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug, targetUrl } = req.body as CreateShortUrlRequest;
    if (!targetUrl) {
        res.status(400).end('targetUrl must not be empty.');
        return;
    }

    const response = await prisma.short_url.create({
        data: {
            target_url: targetUrl,
            slug: slug ? slug : "slug" + targetUrl.replace(/[^a-zA-Z]/g, "") // TODO
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
    try {
        const { method } = req

        const handler = handlers.find(handler => handler.method === method)

        if (!handler) {
            res.setHeader('Allow', handlers.map(handler => handler.method))
            res.status(405).end(`Method ${method} Not Allowed`)
            return;
        }

        await handler.handle(req, res);
    } catch (e) {
        res.status(500).end(e.toString());
    }

}

