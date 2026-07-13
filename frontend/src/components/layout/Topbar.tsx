import Link from "next/link";
import styles from "@/styles/layout/Topbar.module.css";

export default function Topbar() {
    return (
        <header className={styles.topbar}>
            <div>
                <h2>Plan Your Trip</h2>
                <p>Choose a ready package or build a personalized trip with AI.</p>
            </div>

            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles.iconButton}
                    aria-label="Notifications"
                >
                    <i className="bi bi-bell" />
                </button>

                <div className={styles.authActions}>
                    <Link href="/login" className="btn btn-outline-success">
                        Sign In
                    </Link>

                    <Link href="/register" className="btn btn-success">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
}