import styles from "@/styles/post-categories.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"

interface Category {
    name: string
    slug: string
}

export default function PostCategories({ categories }: { categories: Category[] }) {
    console.log("categories")
    console.log(categories)
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only">Categories</span>
            </h3>
            <ul className={styles.list}>
                {categories.map(({ name, slug }) => (
                    <li key={slug}>
                        <Link href={`/blog/category/${slug}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}