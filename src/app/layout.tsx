import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Navbar } from "@/app/_components/Navbar";
import Providers from "@/components/Providers/Providers";
import { Sidebar } from "@/app/_components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Notifications } from "@/components/Notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutor | Начни обучаться",
  description: "Научи обучение вместе с Tutor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <Navbar />
            <main className="flex flex-col-reverse lg:flex-row w-full h-screen overflow-hidden">
              <Sidebar />
              <div className="w-full overflow-auto">{children}</div>
            </main>
          </div>
          <Notifications />
          <Toaster closeButton />
        </Providers>
      </body>
    </html>
  );
}
