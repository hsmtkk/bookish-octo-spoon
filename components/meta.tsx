"use client"

import Head from "next/head";
import { siteMeta } from "@/lib/constant";
import { usePathname } from "next/navigation";
import siteImg from '@/public/images/ogp.jpg'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }: { pageTitle?: string, pageDesc?: string, pageImg?: string, pageImgW?: number, pageImgH?: number }) {
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    const desc = pageDesc ?? siteDesc

    const path = usePathname()
    const url = `${siteUrl}${path}`

    const img = pageImg || siteImg.src
    const imgW = (pageImgW || siteImg.width).toString()
    const imgH = (pageImgH || siteImg.height).toString()
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`
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
            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
        </Head>
    )
}