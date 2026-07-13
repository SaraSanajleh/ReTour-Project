import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReTour | Rediscover Jordan",
  description:
    "Explore ready-made Jordan travel packages or build a personalized trip using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}