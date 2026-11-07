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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${spaceGrotesk.variable} ${interTight.variable}`}>
//       <body className="relative min-h-screen bg-white font-body text-neutral-900 antialiased overflow-x-hidden selection:bg-[#ff4d00] selection:text-white">
        
//         {/* Simple & Clean White + Orange Linear Gradient Base */}
//         <div 
//           aria-hidden="true" 
//           className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#ffffff] via-[#fff3eb] to-[#fed7aa]"
//         />

//         {/* 2. Crisp, Visible Tech Dot Grid Pattern */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none fixed inset-0 z-0 opacity-20"
//           style={{
//             backgroundImage: `radial-gradient(circle, #ea580c 1.5px, transparent 1.5px)`,
//             backgroundSize: "28px 28px",
//           }}
//         />

//         {/* Content Layer */}
//         <div className="relative z-10 flex min-h-screen flex-col justify-between">
//           <Navbar />
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${interTight.variable}`}>
      <body 
        className="relative min-h-screen font-body text-neutral-900 antialiased overflow-x-hidden selection:bg-[#ff4d00] selection:text-white"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `
            radial-gradient(circle, #ea580c 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #ffffff, #fff3eb 10%, #fed7aa 90%)
          `,
          backgroundSize: "28px 28px, 100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Extra fixed divs poori tarah delete kar dein */}

        <div className="relative flex min-h-screen flex-col justify-between">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}