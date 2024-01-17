import type { Metadata } from "next";
import { SwellProvider } from "@/lib/swell";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swell Customer Portal",
  description:
    "View payment history, download invoices, and manage subscriptions and payment methods.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SwellProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SwellProvider>
  );
}
