import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shelter Trips — Luxury Kashmir Tour Packages",
  description: "Book luxury Kashmir tour packages with Shelter Trips. Stay in 5-star hotels, houseboats, and explore Srinagar, Gulmarg, Pahalgam, and Ladakh hassle-free. Premium travel experiences since 2015.",
  keywords: "Kashmir tour packages, luxury Kashmir travel, houseboat Kashmir, Srinagar tours, Gulmarg, Pahalgam, Ladakh, Kashmir car rental",
  openGraph: {
    title: "Shelter Trips — Luxury Kashmir Tour Packages",
    description: "Premium Kashmir travel experiences. Houseboats, 5-star hotels, curated itineraries.",
    url: "https://sheltertrips.com",
    siteName: "Shelter Trips",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
