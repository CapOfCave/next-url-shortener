import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

interface CreateBody {
    targetUrl?: string;
    slug?: string
}

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug, targetUrl } = JSON.parse(req.body) as CreateBody;
    if (!targetUrl) {
        res.status(400).end('targetUrl must not be empty.');
        return;
    }

    prisma.short_url.create({
        data: {
            target_url: targetUrl,
            slug: slug ?? "slug" + targetUrl.replaceAll(/[^a-zA-Z]/, "") // TODO
        }
    })
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

    handler.handle(req, res);
}

