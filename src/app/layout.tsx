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
      <body className="min-h-screen font-typewriter flex flex-col">
        <div className="min-h-20 min-w-full bg-black self-start text-center flex justify-center">
          <h2 className="font-typewriter pt-5 text-center typewriter font-light font-base text-white">
            Discover food like never before. Share, explore, and savor food
            experiences with
            <span className=" font-bold  ml-2">cafemedia !</span>
          </h2>
        </div>
        {children}
      </body>
    </html>
  );
}
