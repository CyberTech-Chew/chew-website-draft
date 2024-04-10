import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <img src="/Logo.png" alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.navItems}>
                <Link className={styles.navitem} href="/">Home</Link>
                <Link className={styles.navitem} href="/About">About me</Link>
                <Link className={styles.navitem} href="/Resume">Resume</Link>
                <Link className={styles.navitem} href="/Contact">Contact me</Link>
            </div>
        </nav>
    );
} 