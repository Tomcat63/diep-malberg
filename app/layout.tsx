import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My New Home – Lodi Gardens | Assisted Living in Clairemont & UTC",
  description:
    "Compassionate, affordable assisted living in the Clairemont and UTC area. Clean home, dedicated caregivers, healthy meals, and daily activities for your loved one.",
  alternates: {
    canonical: "https://diep-malmberg.vercel.app",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "My New Home – Lodi Gardens",
    description: "Kind care, a clean home, healthy food — assisted living in Clairemont / UTC.",
    type: "website",
    url: "https://diep-malmberg.vercel.app",
    images: [
      {
        url: "https://diep-malmberg.vercel.app/images/img01.jpg",
        width: 1200,
        height: 800,
        alt: "My New Home – Lodi Gardens assisted living home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My New Home – Lodi Gardens",
    description: "Kind care, a clean home, healthy food — assisted living in Clairemont / UTC.",
    images: ["https://diep-malmberg.vercel.app/images/img01.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
