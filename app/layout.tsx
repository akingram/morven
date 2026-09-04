import type { Metadata } from "next";
import "./globals.css";

const title = "Morven Industrial Limited";
const description =
  "Ghana-focused engineering, procurement, protective coatings, chemicals, marine supplies, PPE and industrial equipment with Lagos/Apapa as Nigeria reference.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://morvenindustrial.org");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/morven/favicon.png",
    shortcut: "/morven/favicon.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Morven Industrial",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Morven Industrial Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
