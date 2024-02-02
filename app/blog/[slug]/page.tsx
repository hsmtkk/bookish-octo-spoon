import Container from "@/components/container";
import ConvertBody from "@/components/convert-body";
import Meta from "@/components/meta";
import PostBody from "@/components/post-body";
import PostCategories from "@/components/post-categories";
import PostHeader from "@/components/post-header";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import { eyecatchLocal } from "@/lib/constant";
import { extractText } from "@/lib/extract-text";
import { getPostBySlug } from "@/lib/microcms";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const post = await getPostBySlug(slug)
    const title = post.title
    const publish = post.publishDate
    const content = post.content
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const categories = post.categories

    const description = extractText(post.content)

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    return (
        <Container>
            <Meta pageTitle={title} pageDesc={description} pageImg={eyecatch.url} pageImgW={eyecatch.width} pageImgH={eyecatch.height} />
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image src={eyecatch.url} alt="" layout="responsive" width={eyecatch.width} height={eyecatch.height} sizes="(min-width:1152px) 1152px, 100vw" priority placeholder="blur" blurDataURL={eyecatch.blurDataURL} />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody><ConvertBody contentHTML={content} /></PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}