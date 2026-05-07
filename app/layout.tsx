import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digiroute.me"),
  title: {
    default: "DigiRoute — Last-Mile Logistics for Qatar & UAE",
    template: "%s | DigiRoute",
  },
  description:
    "DigiRoute delivers last-mile excellence across Qatar and the UAE. Rider outsourcing, fleet management, dispatch software, and end-to-end commercial logistics — built for modern commerce.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "DigiRoute",
    locale: "en_US",
    url: "https://www.digiroute.me",
    title: "DigiRoute — Last-Mile Logistics for Qatar & UAE",
    description:
      "DigiRoute delivers last-mile excellence across Qatar and the UAE. Rider outsourcing, fleet management, dispatch software, and end-to-end commercial logistics — built for modern commerce.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon",        type: "image/png",     sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${fraunces.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
