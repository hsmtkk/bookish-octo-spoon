import parse from "html-react-parser"
import { Element } from 'html-react-parser';
import Image from "next/image"

const parseAsInt = (s: string): number => {
    const n = parseInt(s)
    if (Number.isNaN(n)) {
        return 0
    }
    return n
}

export default function ConvertBody({ contentHTML }: { contentHTML: string }) {
    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if (node instanceof Element) {
                if (node.name === "img") {
                    const { src, alt, widthStr, heightStr } = node.attribs
                    const width = parseAsInt(widthStr)
                    const height = parseAsInt(heightStr)
                    return (
                        <Image layout="responsive" src={src} alt={alt} width={width} height={height} sizes="(min-width:768px) 768px, 100vw" />
                    )
                }
            }
        }
    })
    return <>{contentReact}</>
}

