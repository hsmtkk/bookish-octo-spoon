import Image from "next/image";
import styles from "@/styles/hero.module.css"

export default function Hero({ title, subtitle, imageOn = false }: { title: string, subtitle: string, imageOn?: boolean }) {
    return (<div>
        <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {imageOn && <Image src="" alt="" />}
    </div>)
}