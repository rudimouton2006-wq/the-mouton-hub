import "./globals.css"; // The crucial line that restores all your styling
import type { Metadata } from "next";

// ---------------------------------------------------------
// GLOBAL SEO & SOCIAL MEDIA METADATA
// ---------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: "Takumi Tech | Premium IT & Web Solutions",
    template: "%s | Takumi Tech", // Automatically adds "| Takumi Tech" to other pages
  },
  description: "Premium computer repair, expert hardware upgrades, and fast website design built for your business in Cape Town.",
  keywords: [
    "IT Support Cape Town", 
    "Website Design", 
    "Network Setup", 
    "Computer Repair", 
    "Hardware Upgrades", 
    "Business IT Solutions",
    "Managed Web Hosting"
  ],
  authors: [{ name: "Takumi Tech Engineering" }],
  openGraph: {
    title: "Takumi Tech | Premium IT & Web Solutions",
    description: "Premium computer repair, expert hardware upgrades, and fast website design built for your business.",
    url: "https://takumitech.co.za", 
    siteName: "Takumi Tech",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Takumi Tech Systems",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takumi Tech | Premium IT & Web Solutions",
    description: "Premium computer repair, expert hardware upgrades, and fast website design built for your business.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030508] text-white antialiased">
        {children}
      </body>
    </html>
  );
}