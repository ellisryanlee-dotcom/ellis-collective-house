import "./globals.css";
import { Inter_Tight } from "next/font/google";
import type { Metadata } from "next";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "110 Productions",
  description: "110 Production digital home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}
