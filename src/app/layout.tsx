import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://tryfitcheck.co";

export const metadata: Metadata = {
  title: {
    default: "FITCHECK — AI-Powered Outfit Feedback | Dress Better With Confidence",
    template: "%s | FITCHECK",
  },
  description:
    "Stop second-guessing your outfits. FITCHECK uses AI to score your fit, color, and style — giving you honest feedback and personalized recommendations so you leave the house confident every time.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FITCHECK",
    title: "FITCHECK — AI-Powered Outfit Feedback | Dress Better With Confidence",
    description:
      "Stop second-guessing your outfits. FITCHECK uses AI to score your fit, color, and style — giving you honest, personalized feedback so you leave confident every time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FITCHECK — AI-Powered Outfit Feedback",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FITCHECK — AI-Powered Outfit Feedback",
    description:
      "Stop second-guessing your outfits. Get AI-powered scores on fit, color, and style with personalized recommendations.",
    images: ["/og-image.png"],
  },
  keywords: [
    "outfit feedback app",
    "AI outfit checker",
    "outfit rating app",
    "style score app",
    "what to wear app",
    "outfit scanner",
    "AI fashion advice",
    "dress better app",
    "outfit confidence",
    "FITCHECK",
  ],
  authors: [{ name: "FITCHECK" }],
  creator: "FITCHECK",
  publisher: "FITCHECK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
