import type { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "@/styles/layout/MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}