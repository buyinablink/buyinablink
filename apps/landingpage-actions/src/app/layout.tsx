import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import logo from "../assets/logo.svg"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Buy In A Blink",
  description:
    "Easily create your online store, share products via Solana Blinks, and manage orders—all from a single dashboard.",
  openGraph: {
    description:
      "Easily create your online store, share products via Solana Blinks, and manage orders—all from a single dashboard.",
    images: logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
