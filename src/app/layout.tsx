import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { inter, playfair } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ellis Collective House",
  description: "A creative sanctuary crafted for collaboration and modern living."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-background text-foreground antialiased">
        <div className="gradient-ring" aria-hidden />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
