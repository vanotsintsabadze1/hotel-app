import type { Metadata } from "next";
import "./globals.css";
import "./fontFamilies.css";

export const metadata: Metadata = {
  title: "Hotel App",
  description: "A hotel app",
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
