
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bhagwati Ayurved Pharmacy",
    template: "%s | Bhagwati Ayurved Pharmacy",
  },
  description:
    "Explore Bhagwati Ayurved Pharmacy's Ayurvedic product catalogue, company information and partnership enquiries.",
  applicationName: "Bhagwati Ayurved Pharmacy",
  robots: {
    index: true,
    follow: true,
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
