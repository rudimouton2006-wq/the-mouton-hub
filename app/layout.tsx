import "./globals.css";
import type { Metadata } from "next";

// IMPORT YOUR COMPONENTS HERE
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

// ---------------------------------------------------------
// GLOBAL SEO METADATA
// ---------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: "Takumi Tech | Premium IT & Web Solutions",
    template: "%s | Takumi Tech", 
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
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030508] text-white antialiased min-h-screen flex flex-col">
        
        {/* The Navigation Bar sits at the very top */}
        <Navbar />

        {/* This renders whatever page you are currently on (Home, Services, etc.) */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* The Floating Quick Chat Widget */}
        <FloatingActions />

        {/* The Footer sits at the very bottom */}
        <Footer />

      </body>
    </html>
  );
}