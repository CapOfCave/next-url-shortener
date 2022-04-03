import { NextApiRequest, NextApiResponse } from "next"

export interface EndpointHandler {
    method: string,
    handle(req: NextApiRequest, res: NextApiResponse): Promise<void>,
}

export const delegate = (handlers: EndpointHandler[]) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const { method } = req

        const handler = handlers.find(handler => handler.method === method)

        if (!handler) {
            res.setHeader('Allow', handlers.map(handler => handler.method))
            res.status(405).end(`Method ${method} Not Allowed`)
            return;
        }

        await handler.handle(req, res);

    }

}
