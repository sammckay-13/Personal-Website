import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mckaypable",
  description: "Created by Sam McKay",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scrollbar-track-sky-100 scrollbar-thumb-[#DC9954]`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFBEE] md:w-full">
        {children}
      </body>
    </html>
  );
}
