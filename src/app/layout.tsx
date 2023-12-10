/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Crypto Tracker - Track Crypto Market",
  description: "Tracking the Crypto Market always",
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@1,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body-full w-screen bg-gradient-to-b to-indigo-950 from-slate-950 h-screen overflow-y-hidden">
        {children}
      </body>
    </html>
  );
}
