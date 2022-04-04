
export interface CreateShortUrlRequest {
    targetUrl: string;
    slug?: string
}

export interface CreateShortUrlResponse {
    targetUrl: string;
    slug: string
}