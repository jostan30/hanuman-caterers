import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanuman Caterers - Authentic Indian Cuisine & Catering Services",
  description: "Experience the divine taste of traditional Indian cuisine. Professional catering services for weddings, corporate events, and special occasions in Mumbai.",
  keywords: "catering, Indian food, Mumbai, wedding catering, corporate events, authentic cuisine",
  authors: [{ name: "Hanuman Caterers" }],
  openGraph: {
    title: "Hanuman Caterers",
    description: "Authentic Indian Cuisine & Professional Catering Services",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        
        <FloatingContact/>
        
        
        {children}
              
      </body>
    </html>
  );
}
