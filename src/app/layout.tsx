import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cafemedia",
  description: "Welcome to your culinary journey",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-typewriter">{children}</body>
    </html>
  );
}
