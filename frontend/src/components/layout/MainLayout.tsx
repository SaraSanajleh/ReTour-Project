import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styles from "@/styles/layout/MainLayout.module.css";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles.page}>
            <Sidebar />

            <div className={styles.mainArea}>
                <Topbar />

                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}