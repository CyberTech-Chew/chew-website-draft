"use client"
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <Image 
                    src="/Logo.png" 
                    alt="Logo" 
                    className={styles.logo} 
                    width={60} 
                    height={60} 
                />
            </Link>
            <div className={`${styles.navItems} ${isOpen ? styles.navItemsOpen : ""}`}>
                <Link className={styles.navitem} href="/">Home</Link>
                <Link className={styles.navitem} href="/About">About me</Link>
                <Link className={styles.navitem} href="/Resume">Resume</Link>
                <Link className={styles.navitem} href="/Contact">Contact me</Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </nav>
    );
}
