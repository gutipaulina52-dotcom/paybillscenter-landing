import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const fontSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fontDisplay = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Bills Solutions Center | Pay Your Bills Fast & Secure",
  description: "Professional bill payment services across the USA. Rent, electricity, water, gas, internet & phone. Fast. Secure. Reliable.",
  keywords: "bill payment, pay bills online, rent payment, electricity bill, water bill, gas bill, USA",
  openGraph: {
    title: "Bills Solutions Center",
    description: "We Pay Your Bills So You Can Focus on What Matters.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bills Solutions Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bills Solutions Center",
    description: "Fast. Secure. Reliable bill payments across the USA.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
