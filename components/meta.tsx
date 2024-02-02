"use client"

import Head from "next/head";
import { siteMeta } from "@/lib/constant";
import { usePathname } from "next/navigation";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }: { pageTitle?: string, pageDesc?: string }) {
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    const desc = pageDesc ?? siteDesc

    const path = usePathname()
    const url = `${siteUrl}${path}`
    return (
        <Head>
            <meta property="og:title" content={title} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
        </Head>
    )
}