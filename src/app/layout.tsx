import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Zorzex — Systematic Growth for Ambitious Businesses",
  description:
    "We provide UI/UX design, development, and branding services helping ambitious brands grow through strategy, design, and innovation.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Zorzex — Systematic Growth for Ambitious Businesses",
    description:
      "We provide UI/UX design, development, and branding services helping ambitious brands grow through strategy, design, and innovation.",
    url: "https://zorzex.com",
    siteName: "Zorzex",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Zorzex Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zorzex — Systematic Growth for Ambitious Businesses",
    description:
      "We provide UI/UX design, development, and branding services helping ambitious brands grow through strategy, design, and innovation.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative min-h-screen bg-[#FBFBFA] font-sans text-neutral-900 antialiased overflow-x-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none fixed top-0 right-0 h-screen w-full md:w-3/4 z-0 opacity-70"
          style={{
            background: 'radial-gradient(circle at 90% 40%, rgba(245, 178, 140, 0.35) 0%, rgba(250, 214, 195, 0.18) 35%, transparent 70%)'
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}