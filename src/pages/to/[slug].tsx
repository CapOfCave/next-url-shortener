import { GetServerSideProps, NextPage } from "next";
import { getShortUrlBySlug } from "../api/short-urls/[slug]";

const ShortUrlRedirect: NextPage = () => {
    return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params!;
    const shortUrl = await getShortUrlBySlug(slug as string);

    return {
        redirect: {
            permanent: true,
            destination: shortUrl.target_url
        }
    }
}

export default ShortUrlRedirect;
