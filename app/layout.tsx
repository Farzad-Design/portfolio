import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farzad Shahidi — Graphic & Web Designer",
  description:
    "DesignHaus Studio — Professional graphic design, web design, branding, and 3D modeling based in Germany.",
  openGraph: {
    title: "Farzad Shahidi — Graphic & Web Designer",
    description:
      "DesignHaus Studio — Professional graphic design, web design, branding, and 3D modeling based in Germany.",
    url: "https://www.designhausstudio.studio",
    siteName: "DesignHaus Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farzad Shahidi — Graphic & Web Designer",
    description:
      "DesignHaus Studio — Professional graphic design, web design, branding, and 3D modeling based in Germany.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
