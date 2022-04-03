import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import ShortUniqueId from "short-unique-id";
import { delegate, EndpointHandler } from "../../../lib/api-lib";
import { CreateShortUrlRequest } from "../../../types/rest";

const prisma = new PrismaClient()
const uid = new ShortUniqueId({ length: 10 });

export const createShortUrl = async (targetUrl: string, slug?: string) => {
    const actualSlug = slug ? slug : uid().toString();

    return await prisma.short_url.create({
        data: {
            target_url: targetUrl,
            slug: actualSlug,
        }
    });
}

const post = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug, targetUrl } = req.body as CreateShortUrlRequest;
    if (!targetUrl) {
        res.status(400).end('targetUrl must not be empty.');
        return;
    }
    const response = await createShortUrl(targetUrl, slug);
    console.log("response", response)
    res.status(201).json(response);
}

const handlers: EndpointHandler[] = [
    {
        method: 'POST',
        handle: post,
    },
]

export default delegate(handlers);

