import Image from "next/image";
import styles from "@/styles/hero.module.css"

export default function Hero({ title, subtitle, imageOn = false }: { title: string, subtitle: string, imageOn?: boolean }) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            {imageOn && <Image src="/next.svg" alt="" width={100} height={100} />}
        </div>
    )
}