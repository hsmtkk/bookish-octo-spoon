import Container from "@/components/container";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ブログ | CUBE",
}

export default function Blog() {
    return (
        <Container>
            <Meta pageTitle="ブログ" />
            <Hero title="Blog" subtitle="Recent posts" />
        </Container>
    )
}