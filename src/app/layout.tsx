import NextAuthProvider from "@/providers/auth";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FullStack Week Trips",
  description: "A sideproject for Fullstack week trips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </NextAuthProvider>
  );
}
