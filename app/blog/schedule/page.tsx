import Container from "@/components/container";
import ConvertBody from "@/components/convert-body";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column";
import { client, getPostBySlug } from "@/lib/microcms";
import Image from "next/image";

export default async function Schedule() {
    const slug = "schedule"
    const post = await getPostBySlug(slug)
    const title = post.title
    const publish = post.publishDate
    const content = post.content
    const eyecatch = post.eyecatch
    const categories = post.categories

    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image src={eyecatch.url} alt="" layout="responsive" width={eyecatch.width} height={eyecatch.height} sizes="(min-width:1152px) 1152px, 100vw" priority />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody><ConvertBody contentHTML={content} /></PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <></>
                    </TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}