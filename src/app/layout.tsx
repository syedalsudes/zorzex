import type { Metadata } from "next";
import { Space_Grotesk, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display / Headings Font: Modern, sharp, tech-agency vibe
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Clean body font: High readability
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${interTight.variable}`}>
      <body className="relative min-h-screen bg-[#FFF4ED] font-body text-neutral-900 antialiased overflow-x-hidden selection:bg-[#ff4d00] selection:text-white">
        
        {/* Dominant Orange Radial Ambient Glows - Now Fully Visible */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed -top-24 -right-24 h-[650px] w-[650px] rounded-full z-0 opacity-80 blur-[130px]"
          style={{
            background: "radial-gradient(circle, #ff5e1a 0%, #ffa070 45%, transparent 75%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-[40%] -left-32 h-[600px] w-[600px] rounded-full z-0 opacity-70 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #ff4d00 0%, #ff9f68 40%, transparent 75%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none fixed -bottom-32 right-[20%] h-[550px] w-[550px] rounded-full z-0 opacity-75 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #ff7a3d 0%, #ffd0b5 50%, transparent 80%)",
          }}
        />

        {/* Global Orange Tech Grid Tint */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#ff4d00 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between">
          {/* <Navbar /> */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}