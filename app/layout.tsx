import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider/Providers";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
const font = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], });
export const viewport: Viewport = {
  themeColor: "#181818",
  colorScheme: "dark"
}
const metadataBase = new URL('http://localhost:3000/');

export const metadata: Metadata = {
  metadataBase,
  title: "Home | VODO TASK",
  description: "website to display films with two main pages: Home and Details.",
  openGraph: {
    title: "Home | VODO TASK",
    description: "website to display films with two main pages: Home and Details."
  },
  twitter: {
    title: "Home | VODO TASK",
    description: "website to display films with two main pages: Home and Details."
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} overflow-x-hidden`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
