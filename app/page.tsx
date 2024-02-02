import Container from "@/components/container";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUBE",
}

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn={true} />
    </Container>
  )
}