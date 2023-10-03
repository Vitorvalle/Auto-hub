import styles from './styles.module.css'
import './styles.module.css'

export default function SearchBoxLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className={styles.searchbox}>{children}</section>
}