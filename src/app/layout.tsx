import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arc Systems - Engineering Intelligent Systems",
    template: "%s | Arc Systems",
  },
  description:
    "Expert AI/ML solutions, intelligent applications, and full-stack development. Production-ready systems built by experts in Dubai.",
  keywords: [
    "AI development Dubai",
    "Machine Learning UAE",
    "Software development Dubai",
    "Custom AI solutions",
    "Full-stack development",
    "Data engineering",
    "MVP development",
  ],
  authors: [{ name: "Arc Systems" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://arcsystems.tech",
    title: "Arc Systems - Engineering Intelligent Systems",
    description:
      "Expert AI/ML solutions and full-stack development services in Dubai",
    siteName: "Arc Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Systems - Engineering Intelligent Systems",
    description:
      "Expert AI/ML solutions and full-stack development services in Dubai",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="flex flex-col min-h-screen">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
