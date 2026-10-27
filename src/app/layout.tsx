import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Poppins font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://zorzex.vercel.app"
  ),
  title: "Zorzex — Systematic Growth for Ambitious Businesses",
  description:
    "We provide UI/UX design, development, and branding services helping ambitious brands grow through strategy, design, and innovation.",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
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
    <html lang="en" className={poppins.variable}>
      <body className="relative min-h-screen bg-[#FBFBFA] font-sans text-neutral-900 antialiased overflow-x-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 right-0 h-screen w-full md:w-3/4 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 90% 40%, rgba(245, 178, 140, 0.35) 0%, rgba(250, 214, 195, 0.18) 35%, transparent 70%)",
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}