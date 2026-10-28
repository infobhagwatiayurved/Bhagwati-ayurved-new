
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bhagwati Ayurved Pharmacy",
    template: "%s | Bhagwati Ayurved Pharmacy",
  },
  description:
    "Explore Bhagwati Ayurved Pharmacy's Ayurvedic products, company information and partnership enquiries.",
  applicationName: "Bhagwati Ayurved Pharmacy",
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Products", href: "/products" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Ayurvlogs", href: "/ayurvlogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid #E5E8E2",
          }}
        >
          <div
            className="container"
            style={{
              minHeight: "76px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "14px",
              paddingBottom: "14px",
            }}
          >
            <a
              href="/"
              style={{
                color: "#66785D",
                fontSize: "20px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Bhagwati Ayurved Pharmacy
            </a>

            <nav
              aria-label="Main navigation"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#41463D",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            background: "#41463D",
            color: "#FFFFFF",
            marginTop: "40px",
            padding: "32px 0",
          }}
        >
          <div className="container">
            <p style={{ fontWeight: 700, fontSize: "18px" }}>
              Bhagwati Ayurved Pharmacy
            </p>
            <p style={{ fontSize: "14px" }}>
              Explore our Ayurvedic product catalogue and learn
              more about our business.
            </p>
            <p style={{ fontSize: "13px", marginTop: "20px" }}>
              © {new Date().getFullYear()} Bhagwati Ayurved Pharmacy.
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
