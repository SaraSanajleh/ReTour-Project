import Link from "next/link";
import styles from "@/styles/layout/Sidebar.module.css";

const menuItems = [
    { label: "Plan Your Trip", href: "/", icon: "bi-map" },
    {
        label: "Browse Packages",
        href: "/ready-packages",
        icon: "bi-suitcase-lg",
    },
    {
        label: "AI Package Builder",
        href: "/ai-builder",
        icon: "bi-stars",
    },
    { label: "My Trips", href: "/my-trips", icon: "bi-calendar-check" },
    { label: "Bookings", href: "/bookings", icon: "bi-bookmark-check" },
    { label: "Favorites", href: "/favorites", icon: "bi-heart" },
    { label: "Messages", href: "/messages", icon: "bi-chat-dots" },
    { label: "Profile", href: "/profile", icon: "bi-person" },
    { label: "Settings", href: "/settings", icon: "bi-gear" },
];

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div>
                <div className={styles.brand}>
                    <div className={styles.logoIcon}>
                        <i className="bi bi-geo-alt-fill" />
                    </div>

                    <div>
                        <h1>ReTour</h1>
                        <p>Your Journey, Your Way</p>
                    </div>
                </div>

                <nav className={styles.navigation}>
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.menuItem} ${index === 0 ? styles.activeItem : ""
                                }`}
                        >
                            <i className={`bi ${item.icon}`} />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className={styles.supportCard}>
                <h2>Travel local.</h2>
                <h2>Support local.</h2>

                <p>
                    Discover authentic Jordanian experiences while supporting local
                    tourism businesses.
                </p>

                <button type="button" className="btn btn-light w-100">
                    Learn More
                    <i className="bi bi-arrow-right ms-2" />
                </button>
            </div>
        </aside>
    );
}