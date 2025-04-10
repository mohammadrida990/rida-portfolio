import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mohammad Rida Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} mx-1`}>
        <Header />

        <StairTransition />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
