import type { Metadata } from "next";
import LocalFont from "next/font/local";

import "@/styles/global.scss";

const modernDOSFont = LocalFont({
  src: "../assets/fonts/ModernDOS8x16.woff2",
});

export const metadata: Metadata = {
  title: "Q Test Task",
  description: "Made by Ivan Stinsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={modernDOSFont.className}>
        {children}
      </body>
    </html>
  );
}
