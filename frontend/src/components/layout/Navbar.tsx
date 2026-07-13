import Link from "next/link";
import styles from "@/styles/layout/Navbar.module.css";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Ready Packages", href: "/ready-packages" },
    { label: "AI Package Builder", href: "/ai-builder" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={`container ${styles.navbar}`}>
                <Link href="/" className={styles.brand}>
                    <span className={styles.logoIcon}>
                        <i className="bi bi-geo-alt-fill" />
                    </span>

                    <span>
                        <strong>ReTour</strong>
                        <small>Rediscover Jordan</small>
                    </span>
                </Link>

                <div className={styles.navigation}>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${item.href === "/" ? styles.activeLink : ""
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.languageButton}
                        aria-label="Change language"
                    >
                        <i className="bi bi-globe2" />
                    </button>

                    <Link href="/login" className={styles.signInButton}>
                        Sign In
                    </Link>

                    <Link href="/register" className={styles.signUpButton}>
                        Sign Up
                    </Link>
                </div>
            </nav>
        </header>
    );
}